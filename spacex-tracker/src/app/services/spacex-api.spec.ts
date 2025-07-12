import { TestBed } from '@angular/core/testing';

import { SpacexApi } from './spacex-api';

describe('SpacexApi', () => {
  let service: SpacexApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
