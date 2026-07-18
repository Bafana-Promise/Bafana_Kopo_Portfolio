import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    CommonModule,
    MatStepperModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  selectedCompany = 0;

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

  companies = [
    {
      company: 'Neutrinos SA Technologies',
      duration: 'Jan 2021 - Present',
      positions: [
        {
          title: 'Intermediate Software Engineer',
          type: 'Full-time',
          period: 'Oct 2022 - Present',
          description: 'Participating in the design, development and testing of enterprise software applications. Collaborating with cross-functional teams to deliver high-quality software solutions, writing and reviewing clean, maintainable code, participating in code reviews, troubleshooting and debugging applications, and contributing to the continuous improvement of software development processes.'
        },
        {
          title: 'Junior Software Engineer',
          type: 'Full-time',
          period: 'Jun 2022 - Sep 2022',
          description: 'Developed and maintained enterprise web applications using Angular, Node.js, Express.js and MongoDB. Built RESTful APIs, implemented responsive user interfaces, fixed software defects, collaborated with senior developers, and delivered reliable, scalable software solutions while continuously improving technical skills.'
        },
        {
          title: 'Assistant Mentor',
          type: 'Full-time',
          period: 'Oct 2021 - Jun 2022',
          description: 'Supported and mentored new software engineering interns by teaching programming concepts, assisting with technical challenges, conducting knowledge-sharing sessions, and helping interns adapt to the company’s development practices and workplace culture.'
        },
        {
          title: 'Software Engineering Intern',
          type: 'Internship',
          period: 'Jan 2021 - Oct 2021',
          description: 'Developed and implemented web applications using the MEAN stack. Wrote clean, maintainable JavaScript, HTML and CSS, created and managed MongoDB databases, built RESTful APIs using Node.js and Express.js, and collaborated with experienced developers while gaining practical experience in enterprise software development.'
        }
      ]
    },
    {
      company: 'Driver',
      duration: '4 months',
      positions: [
        {
          title: 'Driver Partner',
          type: 'Part-time',
          period: 'Jan 2021 - Apr 2021', // Update these dates if different
          description: 'Provided safe, reliable, and professional transportation services for company staff, ensuring timely pickups and drop-offs to and from designated locations. Planned efficient routes using GPS navigation to minimize travel time, adhered to traffic regulations and safety standards, maintained vehicle cleanliness and routine inspections, and kept accurate trip records. Demonstrated excellent time management, communication, and problem-solving skills while delivering a dependable transport service in a fast-paced environment.'
        }
      ]
    },
    {
      company: 'Steers BP Libradene',
      duration: '1 year',
      positions: [
        {
          title: 'Cashier & Cook',
          type: 'Full-time',
          period: 'Jan 2020 - Dec 2020',
          description: 'Worked in both front-of-house and back-of-house operations, providing excellent customer service in a fast-paced restaurant environment. Processed customer orders and payments, prepared and served meals according to company standards, maintained food safety and hygiene practices, handled cash transactions accurately, and worked collaboratively with the team to ensure efficient daily operations and customer satisfaction.'
        }
      ]
    },
    {
      company: 'Windmill Park Multipurpose Center',
      duration: '11 months',
      positions: [
        {
          title: 'Administrator',
          type: 'Full-time',
          period: 'Feb 2019 - Jan 2020',
          description: 'Performed administrative duties to support the daily operations of the multipurpose centre. Managed financial records by serving as the treasurer, maintained accurate documentation, registered new children joining the crèche, assisted parents with the enrolment process, and ensured records were kept up to date while providing excellent customer service.'
        }
      ]
    }
  ];


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
