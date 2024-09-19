import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss'
})
export class NutritionComponent {
  @Input() nutrition: any;
  caloriesPerServing: number;
  proteinWeight: number;
  carbWeight: number;
  fatWeight: number;
  proteinPercent: number;
  carbPercent: number;
  fatPercent: number;
  proteinStyle: any;
  carbStyle: any;
  fatStyle: any;
  green: string = "#46A8AF";
  greenTrans: string = "#7df0f833";
  pink: string = "#C94095";
  pinkTrans: string = "#c9409533";
  blue: string = "#0F172A";
  blueTrans: string = "#0a226433";

  ngOnInit() {
    this.calcMacros();
  }
  calcMacros(){
    this.caloriesPerServing = this.nutrition.macros.ENERC_KCAL.quantity / this.nutrition.yield;
    this.proteinWeight = this.nutrition.macros.PROCNT.quantity / this.nutrition.yield;
    this.carbWeight = this.nutrition.macros.CHOCDF.quantity / this.nutrition.yield;
    this.fatWeight = this.nutrition.macros.FAT.quantity / this.nutrition.yield;

    this.proteinPercent = Math.round((100 / this.caloriesPerServing) * (this.proteinWeight * 4));
    this.carbPercent = Math.round((100 / this.caloriesPerServing) * (this.carbWeight * 4));
    this.fatPercent = Math.round((100 / this.caloriesPerServing) * (this.fatWeight * 9));

    this.proteinStyle = {"background": `-webkit-linear-gradient(270deg, ${this.green} 0%, ${this.green} ${this.proteinPercent}%, ${this.greenTrans} ${this.proteinPercent}%, ${this.greenTrans} 100%)`};
    this.carbStyle = {"background": `-webkit-linear-gradient(270deg, ${this.blue} 0%, ${this.blue} ${this.carbPercent}%, ${this.blueTrans} ${this.carbPercent}%, ${this.blueTrans} 100%)`};
    this.fatStyle = {"background": `-webkit-linear-gradient(270deg, ${this.pink} 0%, ${this.pink} ${this.fatPercent}%, ${this.pinkTrans} ${this.fatPercent}%, ${this.pinkTrans} 100%)`};
  }
}
