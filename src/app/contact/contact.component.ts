import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  // The critical part: make sure HttpClientModule is in the imports array.
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // =============== Existing from your old code ===============
  selectedLanguage: 'EN' | 'DE' = 'EN';

  translations = {
    EN: {
      TITLE: 'Contact me',
      HEADLINE: 'Let’s work together',
      SUBLINE: 'Got a problem to solve?',
      SUBTEXT1:
        'Contact me through this form, ... your projects with my work.',
      SUBTEXT2: 'Need a Frontend developer? Let’s talk!',
      FORM_NAME: 'What’s your name?',
      FORM_NAME_PLACEHOLDER: 'Your name goes here',
      FORM_MAIL: 'What’s your email?',
      FORM_EMAIL_PLACEHOLDER: 'your.email@email.com',
      FORM_Question: 'How can I help you?',
      FORM_QUESTION_PLACEHOLDER: 'Hello, I am interested in...',
      PRIVACY_POLICY:
        "I've read the privacy policy and agree to the processing of my data as outlined.",
      PRIVACY_ERROR: 'Please accept the privacy policy.',
      SUBMIT_BUTTON: 'Say Hello :)',
    },
    DE: {
      TITLE: 'Kontaktieren Sie mich',
      HEADLINE: 'Lass uns zusammen-arbeiten',
      SUBLINE: 'Haben Sie ein Problem zu lösen?',
      SUBTEXT1: 'Kontaktieren Sie mich über dieses Formular...',
      SUBTEXT2: 'Brauchen Sie einen Frontend-Entwickler? Lass uns reden!',
      FORM_NAME: 'Wie ist Ihr Name?',
      FORM_NAME_PLACEHOLDER: 'Ihr Name kommt hier hin',
      FORM_MAIL: 'Wie lautet Ihre E-Mail?',
      FORM_EMAIL_PLACEHOLDER: 'Ihre.email@email.com',
      FORM_Question: 'Wie kann ich Ihnen helfen?',
      FORM_QUESTION_PLACEHOLDER: 'Hallo, ich interessiere mich für...',
      PRIVACY_POLICY:
        'Ich habe die Datenschutzrichtlinie gelesen ...',
      PRIVACY_ERROR: 'Bitte akzeptieren Sie die Datenschutzrichtlinie.',
      SUBMIT_BUTTON: 'Sag Hallo :)',
    },
  };

  // =============== New additions from your new code ===============
  // Use Angular's "inject" function or the constructor injection—either is fine:
  http = inject(HttpClient);

  // For template-driven form fields
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  // For the privacy checkbox
  acceptTerms = false;

  // Toggle: true = test mode (no real HTTP post), false = live
  mailTest = false;

  post = {
    endPoint: 'https://cenk-korkmaz.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
  }

  setLanguage(language: 'EN' | 'DE') {
    this.languageService.setLanguage(language);
  }

  onSubmit(contactForm: NgForm) {
    // Ensure form is valid, then proceed
    if (contactForm.submitted && contactForm.form.valid && !this.mailTest) {
      // Send the actual HTTP request
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            console.log('Response', response);
            contactForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

    } else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {
      // Demo/test mode: no HTTP post
      console.log('mailTest=true. Skipping request. Resetting form...');
      contactForm.resetForm();
    } else {
      // Form invalid: show validation errors
      console.log('Form is invalid or not yet submitted');
    }
  }
}
