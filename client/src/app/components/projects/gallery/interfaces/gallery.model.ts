export interface PaginatedGalleryResponse {
  images: any[];
  pagination: {
    totalImages: number;
    currentPage: number;
    totalPages: number;
  };
}
