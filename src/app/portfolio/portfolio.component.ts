import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from './project.model';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      subtitle: 'What is this project about?',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      githubLink: 'https://github.com/CenkKorkmaz92/Join---2.0',
      liveLink: 'https://cenk-korkmaz.developerakademie.net/Join---2.0/summary.html',
      imageUrl: 'assets/img/pop-ups/join_pop_up.svg',
      modalImageUrl: 'assets/img/pop-ups/modal_join.svg'
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      subtitle: 'What is this project about?',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: ['JS', 'HTML', 'SCSS'],
      githubLink: 'https://github.com/CenkKorkmaz92/El_pollo_loco',
      liveLink: 'https://cenk-korkmaz.developerakademie.net/El_pollo_loco/',
      imageUrl: 'assets/img/pop-ups/el_pollo_loco_pop_up.svg',
      modalImageUrl: 'assets/img/pop-ups/modal_loco.svg'
    },
    {
      id: 3,
      title: 'DABubble',
      subtitle: 'What is this project about?',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      githubLink: '#',
      liveLink: '#',
      imageUrl: 'assets/img/pop-ups/da_bubble_pop_up.svg',
      modalImageUrl: 'assets/img/pop-ups/modal_bubble.svg'
    }
  ];

  selectedProject: Project | null = null;

  openModal(project: Project) {
    this.selectedProject = project;
    document.body.classList.add('no-scroll');
  }

  closeModal() {
    this.selectedProject = null;
    document.body.classList.remove('no-scroll');
  }

}


