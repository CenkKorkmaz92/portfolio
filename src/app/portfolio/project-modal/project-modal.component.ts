import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  getIconPath(tech: string): string {
    switch (tech.toLowerCase()) {
      case 'css':
        return 'assets/img/icons/modal_css_icon.svg';
      case 'html':
        return 'assets/img/icons/modal_html_icon.svg';
      case 'firebase':
        return 'assets/img/icons/modal_firebase_icon.svg';
      case 'angular':
        return 'assets/img/icons/modal_angular_icon.svg';
      case 'typescript':
        return 'assets/img/icons/modal_ts_icon.svg';
        case 'javascript':
        return 'assets/img/icons/modal_js_icon.svg';
      default:
        return 'assets/img/icons/default.svg';
    }
  }
}
