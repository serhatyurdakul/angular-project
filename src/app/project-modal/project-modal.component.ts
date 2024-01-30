
import { Project } from '../_models/Project';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  activeModal = inject(NgbActiveModal);

  project = {} as Project;

}
