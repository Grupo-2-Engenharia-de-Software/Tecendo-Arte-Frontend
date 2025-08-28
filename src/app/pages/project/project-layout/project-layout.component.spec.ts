import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLayoutComponent } from './project-layout.component';

describe('ProjectLayoutComponent', () => {
  let component: ProjectLayoutComponent;
  let fixture: ComponentFixture<ProjectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
