import { Component, Input } from '@angular/core';
import { Experience, Skill } from '../../core/portfolioObj.model';

@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() experience: Experience = {
    title: 'Margaret Hamilton',
    jobDescription: 'Software Engineer',
    startingDate: 'May 2022',
    description: 'slslslslslslslSJDF;QWKEJA;SDLFKJQWE',
    skills: [Skill.Angular, Skill.CSS, Skill.HTML]
  }

}
