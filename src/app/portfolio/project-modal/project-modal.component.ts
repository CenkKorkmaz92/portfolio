import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project.model'; // adjust path if needed

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
}
