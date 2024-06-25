import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { TechTagComponent } from '../../global/tech-tag/tech-tag.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconModule, TechTagComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  imgagesUrl: string = './../../../../assets/img/';
  projects = [
    {
      title: `Todo list project using signals`,
      description: 'A little app that lets you add, edit, delete, mark as complete, filter and count your todo list items. Built in Angular using signals.',
      img: './assets/img/todos.png',
      projectUrl: '/todos',
      tech: ['Angular', 'Signals']
    }
  ]
}
