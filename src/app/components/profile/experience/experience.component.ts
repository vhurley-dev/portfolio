import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechTagComponent } from '../../global/tech-tag/tech-tag.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TechTagComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      date: {
        from: 'Mar 2022',
        to: 'present'
      },
      company: 'Leighton',
      title: 'Frontend Software Engineer',
      description: [
        'I am currently employed by Leighton and have been out on contract with British Airways consistently since joining the team. At BA I have been involved in a variety of projects including building apps with Angular and AWS (predonminantly front end but also assisting in back end tasks), page redesign projects and accessibility improvement.'
      ],
      tech: ['Angular', 'AWS', 'Nest.js', 'TypeScript', 'JavaScript', 'Jest', 'Jasmine', 'Pact', 'Terraform']
    },
    {
      date: {
        from: 'Sept 2018',
        to: 'Feb 2022'
      },
      company: 'REG Technologies',
      title: 'Frontend Software Engineer',
      description: [
        'At REG technologies as part of the development team I helped build, maintain and design their subscription app. This app is used to assist regulated businesses in the insurance sector towards being compliant. I worked on developing many new features including document exchange, dashboards and the international regulators project.'
      ],
      tech: ['Angular', 'Azure', 'TypeScript', 'SCSS', 'Bootstrap']
    },
  ]
}
