import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { ExperienceCardComponent } from './home-page/experience-card/experience-card.component';
import { AboutCardComponent } from './home-page/about-card/about-card.component';
import {MatStepperModule} from '@angular/material/stepper';
import { EducationCardComponent } from './home-page/education-card/education-card.component';
import { ProjectsCardComponent } from './home-page/projects-card/projects-card.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceCardComponent,
    AboutCardComponent,
    EducationCardComponent,
    ProjectsCardComponent,
    ProjectPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
