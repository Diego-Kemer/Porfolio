import { TestBed } from '@angular/core/testing';

import { ProtectorGuard } from './protector.guard';

describe('ProtectorGuard', () => {
  let guard: ProtectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
