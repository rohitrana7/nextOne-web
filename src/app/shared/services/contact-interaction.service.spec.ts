import { TestBed } from '@angular/core/testing';

import { ContactInteractionService } from './contact-interaction.service';

describe('ContactInteractionService', () => {
  let service: ContactInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
