import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from './core/portfolioObj.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-app';
  projects!: Observable<Project[]>;

  constructor (private router: Router, private dataService: DataService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }

}

