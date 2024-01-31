import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Serhat Yurdakul - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/pdfs/SerhatYurdakulResume.pdf');
    link.setAttribute('download', 'SerhatYurdakulResume.pdf');
    link.click();
    link.remove();
  }
}
