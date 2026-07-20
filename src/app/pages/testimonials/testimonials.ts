import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testimonials',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {

  testimonials = [
    {
      name: 'Hilton Barnes',
      role: 'Project Manager',
      image: '/testimonials/hilton.jpg',
      paragraphs: [
        `I started working with Tukiso in 2018 when he was a junior developer, with no hands-on client experince in the IT space, but he had just completed an internship program at Neutrinos, where he excelled in lapping up the training that had been provided.`,
        `Understanding the SDLC process better, he grew and progressed beyond expectation and soon found himself in demand, assigned to multiple initiatives at a time.`,
        `He has mushroomed into a capable senior in a short space of time and continues to write his own success story.`
      ]
    },
    {
      name: 'Prince Ntshalintshali',
      role: 'Intermediate Software Engineer',
      image: '/testimonials/prince.jpg',
      paragraphs: [
        `I'm immensely grateful for the profound impact Tukiso Mateka has had on my career and personal growth journey.`,
        `Tukiso's palpable passion for teaching infuses every lesson with enthusiasm, inspiring a love for learning among his students.`
      ]
    },
    {
      name: 'Simphiwe Nene',
      role: 'Candidate',
      image: '/testimonials/simphiwe.jpg',
      paragraphs: [
        `I distinctly remember the first time I witnessed Tukiso Mateka developing a website live in class.`,
        `Tukiso Mateka played a pivotal role in shaping my journey and accelerating my career as a software developer.`
      ]
    },

    // Add the remaining cards here using the same structure
  ];

  currentIndex = 0;

  nextTestimonial() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
  }

  previousTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}