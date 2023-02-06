import { Component, Input } from '@angular/core';
import { Education } from '../../core/portfolioObj.model';

@Component({
  selector: 'education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
    @Input() education: Education = {
      school: "",
      major: "",
      GPA: "",
      duration: "",  
      description: "", 
      activities: ""
    }
}
