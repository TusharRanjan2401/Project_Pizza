import { TestBed } from '@angular/core/testing';

import { PizzadataserviceService } from './pizzadataservice.service';

describe('PizzadataserviceService', () => {
  let service: PizzadataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzadataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
