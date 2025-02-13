import { TestBed } from '@angular/core/testing';

import { LuneApiService } from './lune-api.service';

describe('LuneApiService', () => {
  let service: LuneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
