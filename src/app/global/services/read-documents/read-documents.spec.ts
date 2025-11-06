import { TestBed } from '@angular/core/testing';

import { ReadDocuments } from './read-documents';

describe('ReadDocuments', () => {
  let service: ReadDocuments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadDocuments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
