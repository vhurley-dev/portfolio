import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GalleryService } from '../../gallery.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-gallery-optimised',
  imports: [ScrollingModule],
  templateUrl: './gallery-optimised.component.html',
  styleUrl: '../../gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryOptimisedComponent implements OnInit {
  private galleryService = inject(GalleryService);

  // State signals for infinite scroll accumulation
  readonly images = signal<any[]>([]);
  readonly currentPage = signal(1);
  readonly totalPages = signal(1);
  readonly loading = signal(false);

  @ViewChild('sentinel', { static: true }) sentinel!: ElementRef;

  ngOnInit(): void {
    this.loadMoreImages();
    this.setupIntersectionObserver();
  }

  loadMoreImages() {
    // Guard: Don't fetch if already loading or we've reached the end
    if (
      this.loading() ||
      (this.currentPage() > this.totalPages() && this.totalPages() > 1)
    ) {
      return;
    }

    this.loading.set(true);

    this.galleryService
      .getOptimisedGallery(this.currentPage(), 12)
      .pipe(
        finalize(() => this.loading.set(false)),
        catchError((error) => {
          console.error('Error fetching infinite batch:', error);
          return of({
            images: [],
            pagination: {
              totalImages: 0,
              currentPage: this.currentPage(),
              totalPages: 1,
            },
          });
        }),
      )
      .subscribe((response) => {
        // Accumulate the new images onto the existing array signal
        this.images.update((current) => [...current, ...response.images]);
        this.totalPages.set(response.pagination.totalPages);

        // Increment page for the next scroll trigger
        this.currentPage.update((p) => p + 1);
      });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMoreImages();
          }
        });
      },
      { rootMargin: '200px' },
    ); // Trigger 200px before the sentinel hits the bottom

    observer.observe(this.sentinel.nativeElement);
  }
}
