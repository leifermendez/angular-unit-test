import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Revisar generación de numeros`, () => {
    const [numberA, numberB] = service.generateNumbers()
    const sum = numberA + numberB;
    expect(sum).toMatch(/\d{1,}/)
  })

  it(`Revisar operacion matematica`, () => {
    const numberA = 5
    const numberB = 4
    const check = service.checkOperation(numberA, numberB, 9)
    expect(check).toBeTrue()
  })

});
