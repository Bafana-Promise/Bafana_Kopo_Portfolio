import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  skillSections = [
    {
      title: 'Web Design',
      skills: [
        'UI/UX Design',
        'Responsive Design',
        'Wireframing',
        'Figma'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'HTML 5',
        'CSS3',
        'Javascript',
        'Angular',
        'React'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'NodeJs',
        'Node-Red',
        'ExpressJS',
        'MongoDB',
        'PostgreSQL'
      ]
    }
  ];

}
