import { Component, computed, input } from '@angular/core';
import { IconModule } from '../../../../../projects/icon/src/lib/icon/icon.module';
import { ProjectArticles } from './interfaces/article.model';

@Component({
  selector: 'app-article-sidebar',
  imports: [IconModule],
  templateUrl: './article-sidebar.component.html',
  styleUrl: './article-sidebar.component.scss',
})
export class ArticleSidebarComponent {
  articles = input.required<ProjectArticles>();

  totalCount = computed(() => {
    const data = this.articles();
    return data.publishedArticles.length + data.draftArticles.length;
  });
}
