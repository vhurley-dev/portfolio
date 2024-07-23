import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconModule } from '../../../../../../../projects/icon/src/lib/icon/icon.module';

@Component({
  selector: 'app-recipes-header',
  standalone: true,
  imports: [IconModule, RouterLink],
  templateUrl: './recipes-header.component.html',
  styleUrl: './recipes-header.component.scss'
})
export class RecipesHeaderComponent {
  constructor(private _location: Location) {}
  showMenu: boolean = false;
  backClick() {
    this._location.back();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  blockScroll(e: any) {
    let delta = e.deltaY || -e.detail;
    e.currentTarget.scrollTop += delta * 30;
    e.stopPropagation();
    e.preventDefault();
  }
}
