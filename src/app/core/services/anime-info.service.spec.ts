import { TestBed } from '@angular/core/testing';

import { AnimeInfoService } from './anime-info.service';

describe('AnimeInfoService', () => {
  let service: AnimeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
