import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Education, Experience, Project, Skill } from '../core/portfolioObj.model';
import { DataService } from '../data.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  // TODO fix this language
  workExperience!: Observable<Experience[]>;
  projects!: Observable<Project[]>;

constructor(private route: ActivatedRoute, private dataService: DataService) {
  this.projects = this.dataService.getProjects();
}


scrollIntoView(id: string){
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'center' });
    }
    
}

openResume(){
  window.open("https://caseysharpe.github.io/Portfolio/assets/[Casey_Sharpe_Resume].pdf", "_blank")
}

gotoPortfolioRepo(){
  window.open("https://github.com/CaseySharpe/Portfolio", "_blank")
}

// todo destroy this 
ngAfterViewInit() {
  this.workExperience = this.dataService.getExperience();
  this.route.params.subscribe(params => {
    if(params['id']){
      let id = params['id'].slice(1);
      this.scrollIntoView(id);
    }
   });
}

}
