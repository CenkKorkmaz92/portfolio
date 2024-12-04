import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  showBackground() {
    const bg = document.getElementById('profile-bg');
    if (bg) {
      bg.classList.add('visible');
    }
  }
}

