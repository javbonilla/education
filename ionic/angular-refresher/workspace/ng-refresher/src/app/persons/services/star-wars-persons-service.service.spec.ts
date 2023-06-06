import { TestBed } from '@angular/core/testing';

import { StarWarsPersonsServiceService } from './star-wars-persons-service.service';

describe('StarWarsPersonsServiceService', () => {
  let service: StarWarsPersonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsPersonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
