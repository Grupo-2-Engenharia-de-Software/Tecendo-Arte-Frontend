import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRewardComponent } from './step-reward.component';

describe('StepRewardComponent', () => {
  let component: StepRewardComponent;
  let fixture: ComponentFixture<StepRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepRewardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
