import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-competencies',
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './competencies.html',
  styleUrl: './competencies.scss',
})
export class Competencies {

  openCertificate(url: string): void {
    window.open(url, '_blank');
  }

}
