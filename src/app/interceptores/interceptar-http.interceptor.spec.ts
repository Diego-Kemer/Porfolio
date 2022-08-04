import { TestBed } from '@angular/core/testing';

import { InterceptarHttpInterceptor } from './interceptar-http.interceptor';

describe('InterceptarHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptarHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptarHttpInterceptor = TestBed.inject(InterceptarHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
