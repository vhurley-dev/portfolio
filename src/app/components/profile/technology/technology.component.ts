import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  technologies = [
    {technology: 'Angular', score: '80%'},
    {technology: 'AWS', score: '50%'},
    {technology: 'Azure', score: '50%'},
    {technology: 'CSS', score: '80%'},
    {technology: 'Git', score: '60%'},
    {technology: 'HTML', score: '80%'},
    {technology: 'Jasmine', score: '40%'},
    {technology: 'JavaScript', score: '80%'},
    {technology: 'Jest', score: '40%'},
    {technology: 'JQuery', score: '60%'},
    {technology: 'Nest.js', score: '30%'},
    {technology: 'Pact', score: '30%'},
    {technology: 'Terraform', score: '30%'},
    {technology: 'TypeScript', score: '75%'},
    {technology: 'SCSS', score: '80%'},
    {technology: 'XSLT', score: '70%'},
  ]
}
