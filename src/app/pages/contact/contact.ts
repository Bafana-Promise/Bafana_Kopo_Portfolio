import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Loader } from '../loader/loader'

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    Loader
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  loading = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  sendEmail(): void {

    this.loading = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const form = this.contactForm.getRawValue();

    emailjs.send(
      'service_a28c1b4',
      'template_9z9g0vh',
      {
        name: form.name,
        emailFrom: form.email,
        message: form.message,
        replyToEmail: form.email,
        to_email: 'bafanapromise1@gmail.com'
      },
      'bl9hSewwoz0KS9YA6'
    )
      .then(() => {

        this.loading = false;

        this.snackBar.open(
          'Message sent successfully!',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );

        this.contactForm.reset();

      })
      .catch((error) => {

        console.error(error);

        this.loading = false;

        this.snackBar.open(
          'Failed to send message.',
          'Close',
          {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          }
        );

      });

  }

  resetForm(): void {
    this.contactForm.reset();
  }
}