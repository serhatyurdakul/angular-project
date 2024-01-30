import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from './../_services/projects.service';
import { Project } from '../_models/Project';

import { inject, TemplateRef } from '@angular/core';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredproject = {} as Project;


  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Serhat Yurdakul - Home');
  }

  ngOnInit(): void {
    this.featuredproject = this.projectsService.GetProjectById(1);
  }

 


}
