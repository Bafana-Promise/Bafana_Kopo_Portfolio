import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Testimonials } from './pages/testimonials/testimonials';
import { Contact } from './pages/contact/contact';
import { Mentorship } from './pages/mentorship/mentorship';
import { Competencies } from './pages/competencies/competencies'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'testimonials', component: Testimonials },
  { path: 'contact', component: Contact },
  { path: 'competencies', component: Competencies },
  { path: 'mentorship', component: Mentorship }
];