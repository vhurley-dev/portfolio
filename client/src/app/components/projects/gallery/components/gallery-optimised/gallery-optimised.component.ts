import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GalleryService } from '../../gallery.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-gallery-optimised',
  imports: [ScrollingModule],
  templateUrl: './gallery-optimised.component.html',
  styleUrl: '../../gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryOptimisedComponent implements OnInit {
  private galleryService = inject(GalleryService);

  // Hold the full dataset in memory; the CDK viewport handles DOM recycling
  readonly images = signal<any[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    // Request a large enough batch upfront (e.g., 500) to cover the entire dataset
    this.galleryService
      .getOptimisedGallery(1, 500)
      .pipe(
        catchError((error) => {
          console.error('Error fetching data for virtualization:', error);
          return of({
            images: [],
            pagination: { totalImages: 0, currentPage: 1, totalPages: 1 },
          });
        }),
      )
      .subscribe((response) => {
        this.images.set(response.images);
        this.loading.set(false);
      });
  }
}
