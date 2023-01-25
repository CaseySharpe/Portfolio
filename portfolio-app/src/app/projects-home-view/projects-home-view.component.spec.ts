import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHomeViewComponent } from './projects-home-view.component';

describe('ProjectsHomeViewComponent', () => {
  let component: ProjectsHomeViewComponent;
  let fixture: ComponentFixture<ProjectsHomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsHomeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
