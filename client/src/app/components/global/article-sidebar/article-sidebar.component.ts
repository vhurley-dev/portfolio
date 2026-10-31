import {
  Component,
  computed,
  input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ProjectArticles } from './interfaces/article.model';
import { IconModule } from '../../../../../projects/icon/src/lib/icon/icon.module';

@Component({
  selector: 'app-article-sidebar',
  imports: [IconModule],
  templateUrl: './article-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './article-sidebar.component.scss',
})
export class ArticleSidebarComponent {
  articles = input.required<ProjectArticles>();

  totalCount = computed(() => {
    const data = this.articles();
    return data.publishedArticles.length + data.draftArticles.length;
  });
}
