import { TestBed } from '@angular/core/testing';

import { TituloEmAtrasoService } from './tituloEmAtraso.service';

describe('TituloEmAtrasoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TituloEmAtrasoService = TestBed.get(TituloEmAtrasoService);
    expect(service).toBeTruthy();
  });
});
