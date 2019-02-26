import { TestBed, inject } from '@angular/core/testing';

import { CclassService } from './cclass.service';

describe('CclassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CclassService]
    });
  });

  it('should be created', inject([CclassService], (service: CclassService) => {
    expect(service).toBeTruthy();
  }));
});
