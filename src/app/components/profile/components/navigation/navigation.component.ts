import { Component } from '@angular/core';
import { SectionEnums } from '../../enums/sections.enum';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(public route: ActivatedRoute){}
  activeFragment = this.route.fragment.pipe(share()); 
  sections: typeof SectionEnums = SectionEnums;
  navItems: string[] = ['about', 'experience', 'projects', 'recent qualifications', 'technology'];
}
