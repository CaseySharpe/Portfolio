import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, throwError } from 'rxjs';
import { Project, Skill } from '../core/portfolioObj.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

  projectData: Project = {
    title: '',
    subtitle: '',
    description: '',
    skills: [],
    repoLink: '',
    mediaLink: ''
  }
  projects!: Observable<Project[]>;
  safeMediaLink!: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private dataService: DataService, private sanitizer: DomSanitizer) {
    this.projects = this.dataService.getProjects();
    this.route.params.subscribe(params => {
      this.dataService.getProjects().pipe(map(project => project.filter(project => {
        console.log(project.title == params['title'])
        console.log(project.title)
        return project.title == params['title'];
      }))).subscribe(val => {
        this.projectData = val[0]
        if(this.projectData.mediaLink){
          console.log('trying')
          this.safeMediaLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectData.mediaLink);
        }
      });
    })
  }

  gotoRepoLink(){
    if(this.projectData.repoLink){
      window.open(this.projectData.repoLink, "_blank")
    }
  }

  gotoPortfolioRepo(){
    window.open("https://github.com/CaseySharpe/Portfolio", "_blank")
  }

  
  }
  


