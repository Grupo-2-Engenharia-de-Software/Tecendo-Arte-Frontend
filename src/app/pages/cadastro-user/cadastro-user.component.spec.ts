import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUserComponent } from './cadastro-user.component';

describe('CadastroUserComponent', () => {
  let component: CadastroUserComponent;
  let fixture: ComponentFixture<CadastroUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
