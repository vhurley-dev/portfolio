import { Injectable, signal } from '@angular/core';
import { SectionEnums } from '../components/profile/enums/sections.enum';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  activeSection = signal<string>(SectionEnums.ABOUT);

  private observer?: IntersectionObserver;

  setupObserver(elementIds: string[]) {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // We only care when a section enters the top 'tripwire'
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        // This creates a 'tripwire' that is 10% from the top
        // and ignores the bottom 90% of the screen.
        // This way, tall sections are detected the moment they hit the top.
        rootMargin: '-10% 0px -85% 0px',
        threshold: 0,
      },
    );

    elementIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }
}
