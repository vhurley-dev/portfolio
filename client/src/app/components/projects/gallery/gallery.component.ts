import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { RouterLink } from '@angular/router';
import { GalleryUnoptimisedComponent } from './components/gallery-unoptimised/gallery-unoptimised.component';
import { GalleryOptimisedComponent } from './components/gallery-optimised/gallery-optimised.component';
import { ServerStatusComponent } from '../../global/server-status/server-status.component';
import { ServerStatusService } from '../../global/server-status/server-status.service';
import { GallerySkeletonComponent } from './components/gallery-skeleton/gallery-skeleton.component';
import { ArticleSidebarComponent } from '../../global/article-sidebar/article-sidebar.component';
import articleData from '../../../../assets/data/articles.json';
import { ProjectArticles } from '../../global/article-sidebar/interfaces/article.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    IconModule,
    RouterLink,
    GalleryUnoptimisedComponent,
    GalleryOptimisedComponent,
    ServerStatusComponent,
    GallerySkeletonComponent,
    ArticleSidebarComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  private serverStatusService = inject(ServerStatusService);
  showOptimisedGallery: boolean = true;
  isServerReady = this.serverStatusService.isReady;
  isServerError = this.serverStatusService.isError;
  isLoading = computed(() => !this.isServerReady() && !this.isServerError());
  isDisabled = computed(() => this.isServerError() || this.isLoading());
  private galleryProject = articleData.allArticles.find(
    (p) => p.project === 'gallery',
  ) ?? {
    project: 'gallery',
    publishedArticles: [],
    draftArticles: [],
  };
  galleryArticles = signal<ProjectArticles>(this.galleryProject);

  onToggleGallery() {
    this.showOptimisedGallery = !this.showOptimisedGallery;
  }
}
