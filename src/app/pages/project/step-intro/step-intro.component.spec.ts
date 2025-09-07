import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIntroComponent } from './step-intro.component';

describe('StepIntroComponent', () => {
  let component: StepIntroComponent;
  let fixture: ComponentFixture<StepIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
