import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardInfoComponent } from './reward-info.component';

describe('RewardInfoComponent', () => {
  let component: RewardInfoComponent;
  let fixture: ComponentFixture<RewardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
