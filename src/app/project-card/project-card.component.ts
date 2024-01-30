import { Project } from './../_models/Project';
import { Component, Input, TemplateRef, inject } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  private modalService = inject(NgbModal);
  closeResult = '';


  // this.modalService.open(content, { size: 'lg' });

  OpenProjectModal() {
    const modalRef = this.modalService.open(ProjectModalComponent,{ size: 'lg' ,centered: true});
    modalRef.componentInstance.name = 'World';
    // this.modalService.open(content, { size: 'lg' });
  }

  // open() {
  // 	const modalRef = this.modalService.open(ProjectModalComponent);
  // 	modalRef.componentInstance.name = 'World';
  // }

  // OpenProjectModal() {
  //   const modalOptions: NgbModalOptions = {
  //     windowClass: "modal-lg"
  //   };
  // }
}
