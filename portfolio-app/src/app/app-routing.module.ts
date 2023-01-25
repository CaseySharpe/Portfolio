import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProjectPageComponent } from "./project-page/project-page.component";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: ':id', component: HomePageComponent },
    { path: 'projects/:title', component: ProjectPageComponent },
    { path: '**', redirectTo: ''}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  