import { Component } from '@angular/core';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { RouterLink } from '@angular/router';
import { GalleryUnoptimisedComponent } from './components/gallery-unoptimised/gallery-unoptimised.component';
import { GalleryOptimisedComponent } from './components/gallery-optimised/gallery-optimised.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    IconModule,
    RouterLink,
    GalleryUnoptimisedComponent,
    GalleryOptimisedComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  showOptimisedGallery: boolean = true;

  onToggleGallery() {
    this.showOptimisedGallery = !this.showOptimisedGallery;
  }
}
