import { TestBed } from '@angular/core/testing';

import { CometariosService } from './cometarios.service';

describe('CometariosService', () => {
  let service: CometariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CometariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
