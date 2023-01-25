import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education, Experience, Project, Skill } from '../core/portfolioObj.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  // TODO fix this language
  workExperience: Experience[] = [{
    title: 'Margaret Hamilton Distinguished Intern',
    jobDescription: 'Pennsylvania State University IT',
    startingDate: 'April 2022',
    endDate: 'May 2023',
    description: 'Learning coach and mentor for students learning Intermediate Object-Oriented Design and Software Applications (Java). Supporting instructors with teaching-related tasks. Responsible for hosting office hours, providing feedback on assignments, and assisting with grading.',
    skills: [Skill.Angular, Skill.CSS, Skill.HTML, Skill.TypeScript]
  }, {
    title: 'Assistant Student Director of IST Learning Assistant Program',
    jobDescription: 'Pennsylvania State University',
    startingDate: 'March 2022',
    endDate: 'Present',
    description: 'Learning coach and mentor for students learning Intermediate Object-Oriented Design and Software Applications (Java). Supporting instructors with teaching-related tasks. Responsible for hosting office hours, providing feedback on assignments, and assisting with grading.',
    skills: []
  }, {
    title: 'Information Sciences and Technology Learning Assistant',
    jobDescription: 'Pennsylvania State University',
    startingDate: 'January 2022',
    endDate: 'January 2023',
    description: 'Learning coach and mentor for students learning Intermediate Object-Oriented Design and Software Applications (Java). Supporting instructors with teaching-related tasks. Responsible for hosting office hours, providing feedback on assignments, and assisting with grading.',
    skills: [Skill.Java]
  }
]

projects: Project[] = [{
  title: 'Traffic App',
  subtitle: 'Sample Subtitle',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco',
  skills: [Skill.Java],
  repoLink: 'sdle'
},
{
  title: 'Traffic App1',
  subtitle: 'Sample Subtitle',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco',
  skills: [Skill.Python]
},
{
  title: 'Traffic App2',
  subtitle: 'Sample Subtitle',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco',
  skills: [Skill.Python, Skill.SQL],
  repoLink: 'sdle'
},
{
  title: 'Traffic App3',
  subtitle: 'Sample Subtitle',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco',
  skills: [Skill.CSS, Skill.HTML]
}]


education: Education = {
  school: 'Pennsylvania State University',
  major: 'Human Centered Design and Development',
  GPA: '3.98',
  duration: 'September 2020 - May 2024',  
  description: 'Learning coach and mentor for students learning Intermediate Object-Oriented Design and Software Applications (Java). Supporting instructors with teaching-related tasks. Responsible for hosting office hours, providing feedback on assignments, and assisting with grading.', 
  activities: ''
}

constructor(private route: ActivatedRoute) {
 
}


scrollIntoView(id: string){
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'center' });
    }
    
}

ngAfterViewInit() {
  this.route.params.subscribe(params => {
    if(params['id']){
      let id = params['id'].slice(1);
      this.scrollIntoView(id);
    }
   });
}

}
