import { TestBed } from '@angular/core/testing';

import { ElementConfigService } from './element-config.service';

describe('ElementConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementConfigService = TestBed.get(ElementConfigService);
    expect(service).toBeTruthy();
  });
});
