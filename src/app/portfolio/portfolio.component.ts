import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from './../_services/projects.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Tag } from '../_models/Tag';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [CommonModule, ProjectCardComponent, NgbCollapseModule, FormsModule],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  //filter collapse
  isCollapsed: boolean = true;

  //languages
  typescript: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  python: boolean = false;

  //frameworks & libraries
  angular: boolean = false;
  vue: boolean = false;
  svelte: boolean = false;
  react: boolean = false;

  //filtering for Reset button
  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Serhat Yurdakul - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.vue) {
      filterTags.push(Tag.VUE);
    }
    if (this.svelte) {
      filterTags.push(Tag.SVELTE);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    if (
      this.typescript ||
      this.javascript ||
      this.java ||
      this.python ||
      this.angular ||
      this.vue ||
      this.svelte ||
      this.react
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.javascript = false;
    this.java = false;
    this.python = false;
    this.angular = false;
    this.vue = false;
    this.svelte = false;
    this.react = false;

    this.filtering = false;

    this.projects = this.projectsService.GetProjects();
  }
}
