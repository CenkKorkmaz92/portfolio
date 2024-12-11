import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

@Component({
  standalone: true,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  imports: [CommonModule]
})
export class CommentsComponent {
  testimonials: Testimonial[] = [
    {
      quote: "Our project benefited enormously from Cenk’s efficient way of working.",
      author: "H. Janisch",
      role: "Team Partner"
    },
    {
      quote: "Cenk has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      author: "J. Smith",
      role: "Frontend Developer"
    },
    {
      quote: "I had the good fortune of working with Cenk in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      author: "T. Schulz",
      role: "Frontend Developer"
    }
  ];

  currentIndex: number = 0;

  // Getter, der immer ein Array aus drei Slides zurückgibt: [Vorherige, Aktive, Nächste]
  get circularSlides(): Testimonial[] {
    const length = this.testimonials.length;
    const prevIndex = (this.currentIndex - 1 + length) % length;
    const nextIndex = (this.currentIndex + 1) % length;

    return [
      this.testimonials[prevIndex],
      this.testimonials[this.currentIndex],
      this.testimonials[nextIndex]
    ];
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
