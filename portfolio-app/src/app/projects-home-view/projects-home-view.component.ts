import { Component } from '@angular/core';
import { Project, Skill } from '../core/portfolioObj.model';

@Component({
  selector: 'projects-home-view',
  templateUrl: './projects-home-view.component.html',
  styleUrls: ['./projects-home-view.component.css']
})
export class ProjectsHomeViewComponent {
  public Skill = Skill;

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

  OnChange(event: any) {
    for(let project of this.projects){
      if (project.skills.includes(event.source.value as Skill)){
        if(event.selected){
          document.getElementById(project.title)!.classList.add("example-card-selected")
        } else {
          document.getElementById(project.title)!.classList.remove("example-card-selected")
          document.getElementById(project.title)!.classList.add("example-card")
        }
        
      }
    }
  }
}

