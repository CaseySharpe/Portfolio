import { Component, Input } from '@angular/core';
import { Project, Skill } from '../../core/portfolioObj.model';

@Component({
  selector: 'works-card',
  templateUrl: './works-card.component.html',
  styleUrls: ['./works-card.component.css']
})
export class WorksCardComponent {
  @Input() project: Project = {
    title: 'Sample Project',
    subtitle: 'Sample Subtitle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco',
    skills: [Skill.Java, Skill.Python]
  }




}
