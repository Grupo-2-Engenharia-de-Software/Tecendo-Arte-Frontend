import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tipoContaGuard } from './tipo-conta.guard';

describe('tipoContaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tipoContaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
