import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { GalleryService } from '../../gallery.service';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-gallery-optimised',
  imports: [],
  templateUrl: './gallery-optimised.component.html',
  styleUrl: '../../gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // <-- OPTIMIZATION: Disables default global dirty-checking
})
export class GalleryOptimisedComponent {
  private galleryService = inject(GalleryService);

  // Track the current page reactively via a Signal
  readonly currentPage = signal(1);
  readonly pageSize = 12;

  // Automatically re-fetch whenever the currentPage signal updates
  readonly galleryData = toSignal(
    toObservable(this.currentPage).pipe(
      switchMap((page) =>
        this.galleryService.getOptimisedGallery(page, this.pageSize).pipe(
          catchError((error) => {
            console.error('Error fetching optimised images:', error);
            return of({
              images: [],
              pagination: { totalImages: 0, currentPage: page, totalPages: 1 },
            });
          }),
        ),
      ),
    ),
    {
      initialValue: {
        images: [],
        pagination: { totalImages: 0, currentPage: 1, totalPages: 1 },
      },
    },
  );

  // Pagination Actions
  nextPage() {
    const data = this.galleryData();
    if (data && this.currentPage() < data.pagination.totalPages) {
      this.currentPage.update((p) => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll back to top on page change
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
