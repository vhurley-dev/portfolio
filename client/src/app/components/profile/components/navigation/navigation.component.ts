import { Component, inject } from '@angular/core';
import { SectionEnums } from '../../enums/sections.enum';
import { CommonModule, KeyValue } from '@angular/common'; // Add KeyValue
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  scrollService = inject(ScrollService);
  sections: typeof SectionEnums = SectionEnums;
  activeSection = this.scrollService.activeSection;

  unsorted = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>,
  ): number => 0;

  isSectionActive(sectionValue: string): boolean {
    const active = this.activeSection();
    return active.toLowerCase() === sectionValue.toLowerCase();
  }
}
