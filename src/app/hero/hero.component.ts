import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  selectedLanguage: string = 'EN'; // Default language

  // Function to set the language
  setLanguage(language: string) {
    this.selectedLanguage = language;
  }
}
