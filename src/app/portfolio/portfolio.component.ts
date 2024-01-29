import { Tag } from './../_models/Tag';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [ProjectCardComponent],
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample Angular Project',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT],
    pictures: [],
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Serhat Yurdakul - Portfolio');
  }
}
