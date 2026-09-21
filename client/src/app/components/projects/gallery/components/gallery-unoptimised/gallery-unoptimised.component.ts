import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { ApiPaths } from '../../../../../enums/api-paths';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-gallery-unoptimised',
  imports: [],
  templateUrl: './gallery-unoptimised.component.html',
  styleUrl: '../../gallery.component.scss',
})
export class GalleryUnoptimisedComponent {
  private galleryService = inject(GalleryService);
  images: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.galleryService.getUnoptimizedGallery().subscribe({
      next: (data) => {
        this.images = data;
        this.loading = false;
        console.log(
          `Frontend Loaded ${data.length} unoptimized images from the backend`,
        );
      },
      error: (error) => {
        console.error('Error fetching images:', error);
        this.errorMessage = 'Failed to load images. Please try again later.';
        this.loading = false;
      },
    });
  }
}
