import { Component, inject } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-gallery-optimised',
  imports: [],
  templateUrl: './gallery-optimised.component.html',
  styleUrl: '../../gallery.component.scss',
})
export class GalleryOptimisedComponent {
  private galleryService = inject(GalleryService);
  images: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';
  pagination: { totalImages: number; currentPage: number; totalPages: number };

  ngOnInit(): void {
    this.galleryService.getOptimisedGallery(1, 12).subscribe({
      next: (response) => {
        this.images = response.images;
        this.pagination = response.pagination;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching optimised images:', error);
        this.errorMessage = 'Failed to load optimised images.';
        this.loading = false;
      },
    });
  }
}
