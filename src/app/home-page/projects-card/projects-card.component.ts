import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Project, Skill } from '../../core/portfolioObj.model';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit{
  public Skill = Skill;
  projects!: Observable<Project[]>;
  selectedChips = 0;
  maxSelectionReached = false;


  

  constructor(private dataService: DataService){
  }

  
  gotoRepoLink(project: Project){
    if(project.repoLink){
      window.open(project.repoLink, "_blank")
    }
  }

  OnChange(event: any) {
    event.selected ? this.selectedChips++ :  this.selectedChips--
   
    if(this.selectedChips >= 4){
      event.source.deselect();
    } else if (this.selectedChips <= 3){
      this.projects.pipe(map((projects) => {
        projects.map((project) => {
          if (project.skills.includes(event.source.value as Skill)){
          if(event.selected){
            document.getElementById(project.title)!.classList.add("project-card-selected");
          } else {
            document.getElementById(project.title)!.classList.remove("project-card-selected")
            document.getElementById(project.title)!.classList.add("project-card")
          }
        }})
        
      }))
    } 
  }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }
  }


