import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
  @Input() ingredients: any;
}
