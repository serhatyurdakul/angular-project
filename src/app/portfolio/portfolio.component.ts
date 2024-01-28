import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [ProjectCardComponent]
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Serhat Yurdakul - Portfolio');
  }
}
