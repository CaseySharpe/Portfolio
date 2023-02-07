import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Education, Experience, Project, Skill } from './core/portfolioObj.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: Project[] = [];
  experience: Experience[] = [];
  education: Education[] = []; 
  $projects!: Observable<Project[]>;
  

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('/assets/projects.json');
  }

  getExperience() {
    return this.http.get<Experience[]>('/assets/experience.json');
  }
  
  // getProjectDetails(details: string) {
  //   this.$projects = this.http.get<Project[]>('/assets/projects.json')
  //   this.$projects
  //   return this.project;  
  // }
   
  }

