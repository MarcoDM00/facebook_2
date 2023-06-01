import { TestBed } from '@angular/core/testing';

import { GestorePostService } from './gestore-post.service';

describe('GestorePostService', () => {
  let service: GestorePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
