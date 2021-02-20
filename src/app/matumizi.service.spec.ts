import { TestBed } from '@angular/core/testing';

import { MatumiziService } from './matumizi.service';

describe('MatumiziService', () => {
  let service: MatumiziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatumiziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
