import { TestBed } from '@angular/core/testing';

import { ControlErrorService } from './control-error.service';

describe('ControlErrorMessageService', () => {
  let service: ControlErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});