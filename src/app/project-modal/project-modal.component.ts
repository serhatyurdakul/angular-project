
import { Project } from '../_models/Project';
import { Component, inject } from '@angular/core';
import { NgbActiveModal,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})

export class ProjectModalComponent {
  activeModal = inject(NgbActiveModal);

  project = {} as Project;

}
