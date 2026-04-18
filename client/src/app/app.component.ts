import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(
    private router: Router,
    private meta: Meta,
    private titleService: Title,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route.snapshot.data;
        }),
      )
      .subscribe((data) => {
        if (data['description']) {
          this.meta.updateTag({
            name: 'description',
            content: data['description'],
          });
        } else {
          this.meta.updateTag({
            name: 'description',
            content:
              'Angular development lab showcasing Angular 21 features and accessible UI patterns.',
          });
        }
      });
  }
}
