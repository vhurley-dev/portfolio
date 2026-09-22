export interface AllArticles {
  allArticles: ProjectArticles[];
}

export interface ProjectArticles {
  project: string;
  publishedArticles: PublishedArticle[];
  draftArticles: DraftArticle[];
}

export interface PublishedArticle {
  title: string;
  url: string;
}

export interface DraftArticle {
  title: string;
}
