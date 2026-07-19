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

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  sendEmail(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const form = this.contactForm.getRawValue();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'bafanapromise1@gmail.com'
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {

      alert('Message sent successfully!');

      this.contactForm.reset();

    })
    .catch((error) => {

      console.error(error);

      alert('Failed to send message.');

    });

  }

  resetForm(): void {
    this.contactForm.reset();
  }
}