import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GalleryService } from '../../gallery.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-gallery-optimised',
  imports: [],
  templateUrl: './gallery-optimised.component.html',
  styleUrl: '../../gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // <-- OPTIMIZATION: Disables default global dirty-checking
})
export class GalleryOptimisedComponent {
  private galleryService = inject(GalleryService);
  images: any[] = [];
  // loading: boolean = true;
  // errorMessage: string = '';
  pagination: { totalImages: number; currentPage: number; totalPages: number };

  // ngOnInit(): void {
  //   this.galleryService.getOptimisedGallery(1, 12).subscribe({
  //     next: (response) => {
  //       this.images = response.images;
  //       this.pagination = response.pagination;
  //       this.loading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching optimised images:', error);
  //       this.errorMessage = 'Failed to load optimised images.';
  //       this.loading = false;
  //     },
  //   });
  // }

  // Converts the HTTP Observable into a read-only Signal
  readonly galleryData = toSignal(
    this.galleryService.getOptimisedGallery(1, 12).pipe(
      catchError((error) => {
        console.error('Error fetching optimised images:', error);
        // Fallback structure matching your PaginatedGalleryResponse
        return of({
          images: [],
          pagination: { totalImages: 0, currentPage: 1, totalPages: 1 },
        });
      }),
    ),
  );

  // Transforming the HTTP observable directly into a read-only signal
  // readonly galleryData = toSignal(
  //   this.galleryService.getOptimisedGallery(1, 12),
  //   {
  //     initialValue: {
  //       images: [],
  //       pagination: { totalImages: 0, currentPage: 1, totalPages: 1 },
  //     },
  //   },
  // );
}
