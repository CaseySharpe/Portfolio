import { Component } from '@angular/core';
import { Project, Skill } from '../../core/portfolioObj.model';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent {
  public Skill = Skill;

  selectedChips = 0;
  maxSelectionReached = false;


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

  constructor(){
  }

  

  OnChange(event: any) {
    event.selected ? this.selectedChips++ :  this.selectedChips--
   
    if(this.selectedChips >= 4){
      event.source.deselect();
    } else if (this.selectedChips <= 3){
      for(let project of this.projects){
        if (project.skills.includes(event.source.value as Skill)){
          if(event.selected){
            document.getElementById(project.title)!.classList.add("project-card-selected");
          } else {
            document.getElementById(project.title)!.classList.remove("project-card-selected")
            document.getElementById(project.title)!.classList.add("project-card")
          }
        }
      }
    } 
  }
  }


