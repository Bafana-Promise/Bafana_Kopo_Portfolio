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
      name: 'Tukiso Mateka',
      role: 'Project Manager',
      image: '/testimonials/tukiso.jpeg',
      paragraphs: [
        `I had the privilege of working with Tukiso Mateka from 2021 when I joined Neutrinos as an intern. Entering the IT industry with limited real-world experience, I was fortunate to have someone who was not only my Project Manager but also my mentor. Tukiso believed in my potential from the very beginning and invested his time in teaching me the fundamentals of software engineering, the SDLC, and what it means to deliver quality solutions in a professional environment.`,

        `Through his mentorship and leadership, I was given opportunities to work on real client projects, take ownership of my responsibilities, and continuously grow both technically and professionally. Much of what I know today was shaped by his guidance, patience, and willingness to share his knowledge. He challenged me to think critically, strive for excellence, and always keep learning.`,

        `Tukiso has had a lasting impact on my career and personal growth. Beyond being an exceptional manager, he is a leader who genuinely develops people and inspires them to reach their full potential. I am grateful for everything he has taught me, and I continue to carry those lessons with me as I progress in my career.`
      ]
    },
    {
      name: 'Siyabonga Hlongwane',
      role: 'Intermediate Software Engineer',
      image: '/testimonials/Siyabonga.jpeg',
      paragraphs: [
        `Working alongside Bafana Promise Kopo was a great experience. He is someone who combines strong technical skills with a genuine passion for software development. His willingness to collaborate and share knowledge made him an invaluable teammate, and his positive attitude created an environment where everyone could contribute and grow.`,

        `One of Bafana's greatest strengths is his ability to simplify complex technical concepts and approach challenges with a solution-oriented mindset. Whether we were working through difficult requirements, debugging issues, or brainstorming ideas, he was always approachable, patient, and eager to help the team succeed.`,

        `Beyond his technical expertise, Bafana is a professional who leads by example through his work ethic, dedication, and commitment to continuous learning. It was a privilege to work with him as a colleague, and I am confident that he will continue to excel and make a meaningful impact wherever his career takes him.`
      ]
    },
    {
      name: 'Oboikanyego Radipabe',
      role: 'Intermediate Software Engineer',
      image: '/testimonials/bk.jpg',
      paragraphs: [
        `I had the pleasure of working alongside Bafana Promise Kopo at Neutrinos, where I came to know him as a dedicated, knowledgeable, and dependable software engineer. His passion for technology and commitment to delivering high-quality solutions were evident in every project we worked on together.`,

        `Bafana was always willing to collaborate, share ideas, and support the team whenever challenges arose. Working with him exposed me to different approaches to problem-solving and software development, and his professionalism and positive attitude made him someone you could always count on.`,

        `Beyond his technical skills, Bafana is a great teammate who is committed to continuous learning and helping those around him succeed. It was a privilege working with him, and I have no doubt that he will continue to make a significant impact wherever his career takes him.`
      ]
    },
    {
      name: 'Prince Ntshalintshali',
      role: 'Intermediate Software Engineer',
      image: '/testimonials/prince.jpg',
      paragraphs: [
        `It was a pleasure working alongside Bafana Promise Kopo at Neutrinos. As a colleague, he consistently demonstrated professionalism, technical excellence, and a strong commitment to delivering quality solutions. His passion for software development and willingness to collaborate made him an important part of every team he worked with.`,

        `Bafana is someone who is always willing to share knowledge, exchange ideas, and help solve challenging problems. Whether we were working on complex features or meeting project deadlines, he approached every task with dedication, a positive attitude, and a solution-driven mindset. His ability to communicate effectively and work well with others made collaboration both productive and enjoyable.`,

        `Beyond his technical capabilities, Bafana is a dependable teammate who values continuous learning and always strives to bring out the best in those around him. I truly enjoyed working with him and have no doubt that his skills, work ethic, and character will continue to make a positive impact wherever his career takes him.`
      ]
    },
    {
      name: 'Simphiwe Nene',
      role: 'Candidate',
      image: '/testimonials/simphiwe.jpg',
      paragraphs: [
        `I had the opportunity to work alongside Bafana Promise Kopo, and from the very beginning, I was impressed by his technical expertise, professionalism, and passion for software development. His ability to approach complex challenges with confidence and find practical solutions made him someone I genuinely enjoyed collaborating with.`,

        `As a colleague, Bafana was always approachable and willing to share his knowledge with the team. Whether we were discussing technical ideas, solving problems, or working toward project goals, he consistently encouraged collaboration and created an environment where everyone could contribute and learn from one another.`,

        `Bafana's dedication, positive attitude, and commitment to continuous improvement make him an exceptional software engineer and teammate. It was a privilege working with him, and I have no doubt that he will continue to achieve great success and make a lasting impact throughout his career.`
      ]
    }

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
