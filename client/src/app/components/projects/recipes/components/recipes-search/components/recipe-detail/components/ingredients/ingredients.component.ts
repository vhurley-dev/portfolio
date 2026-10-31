import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-ingredients',
    imports: [CommonModule],
    templateUrl: './ingredients.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
  @Input() ingredients: any;
}
