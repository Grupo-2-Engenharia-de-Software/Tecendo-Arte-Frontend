import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepImagesComponent } from './step-images.component';

describe('StepImagesComponent', () => {
  let component: StepImagesComponent;
  let fixture: ComponentFixture<StepImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
