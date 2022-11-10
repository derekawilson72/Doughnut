import { TestBed } from '@angular/core/testing';

import { DoughnutsService } from './doughnuts.service';

describe('DoughnutsService', () => {
  let service: DoughnutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoughnutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
