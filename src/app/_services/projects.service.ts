import { Tag } from './../_models/Tag';
import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'e-Commerce Web App  (HTML, CSS and JavaScript)',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink:
        'https://github.com/serhatyurdakul/e-commerce-app-html-css-js',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.JAVASCRIPT],
    },

    {
      id: 1,
      name: 'Sample Python Project',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink:
        'https://github.com/serhatyurdakul/e-commerce-app-html-css-js',
      summary: 'Python project that analyzes stock market data.',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.PYTHON],
    },

    {
      id: 2,
      name: 'Sample .Net App',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink:
        'https://github.com/serhatyurdakul/e-commerce-app-html-css-js',
      summary: 'e-Commerce web app developed using HTML, CSS and JavaScript',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.REACT, Tag.JAVASCRIPT],
    },
    {
      id: 3,
      name: 'Web API Project',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink: 'https://github.com/serhatyurdakul/',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.JAVA, Tag.ANGULAR],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink: 'https://github.com/serhatyurdakul/',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 5,
      name: 'Mobile App',
      pictures: [
        '../../assets/images/image1.png',
        '../../assets/images/image2.png',
        '../../assets/images/image3.png',
      ],
      projectLink: 'https://github.com/serhatyurdakul/',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'e-Commerce web app developed using only HTML, CSS and JavaScript. Full responsive, mobile compatible, ',
      tags: [Tag.JAVA],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is nor project that matches the id: ' + id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach((project) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
