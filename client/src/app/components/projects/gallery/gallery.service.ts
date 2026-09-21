import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../enums/api-paths';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedGalleryResponse } from './interfaces/gallery.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private http = inject(HttpClient);
  private backendUrlOptimised = environment.apiUrl + ApiPaths.GALLERY_OPTIMISED;
  private backendUrlUnoptimised =
    environment.apiUrl + ApiPaths.GALLERY_UNOPTIMISED;

  getUnoptimizedGallery() {
    return this.http.get<any[]>(this.backendUrlUnoptimised);
  }

  getOptimisedGallery(
    page: number = 1,
    limit: number = 12,
  ): Observable<PaginatedGalleryResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<PaginatedGalleryResponse>(this.backendUrlOptimised, {
      params,
    });
  }
}
