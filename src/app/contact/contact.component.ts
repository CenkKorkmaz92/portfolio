import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://philipp-schoenborn.de/sendMail.php'; // URL zu Ihrem PHP-Skript

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue),
  });

  selectedLanguage: 'EN' | 'DE' = 'EN';

  translations = {
    EN: {
      TITLE: 'Contact me',
      HEADLINE: 'Let’s work together',
      SUBLINE: 'Got a problem to solve?',
      SUBTEXT1:
        'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
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
      SUBTEXT1:
        'Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
      SUBTEXT2: 'Brauchen Sie einen Frontend-Entwickler? Lass uns reden!',
      FORM_NAME: 'Wie ist Ihr Name?',
      FORM_NAME_PLACEHOLDER: 'Ihr Name kommt hier hin',
      FORM_MAIL: 'Wie lautet Ihre E-Mail?',
      FORM_EMAIL_PLACEHOLDER: 'Ihre.email@email.com',
      FORM_Question: 'Wie kann ich Ihnen helfen?',
      FORM_QUESTION_PLACEHOLDER: 'Hallo, ich interessiere mich für...',
      PRIVACY_POLICY:
        'Ich habe die Datenschutzrichtlinie gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      PRIVACY_ERROR: 'Bitte akzeptieren Sie die Datenschutzrichtlinie.',
      SUBMIT_BUTTON: 'Sag Hallo :)',
    }
  };

  constructor(private languageService: LanguageService, private contactService: ContactService) { }

  ngOnInit(): void {
    // Subscribe to the service so we know the current language
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  // When the user clicks a button to change language
  setLanguage(language: 'EN' | 'DE') {
    this.languageService.setLanguage(language);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
  
      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        error: (error) => {
          alert('Failed to send the message. Please try again later.');
        },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get privacy() {
    return this.contactForm.get('privacy');
  }
}
