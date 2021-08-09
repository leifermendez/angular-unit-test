import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('(2) Prueba a "DataService"', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it(`Revisar generación de numeros`, () => {
    const [numberA, numberB] = service.generateNumbers() //TODO: [1,2]
    const sum = numberA + numberB;
    expect(sum).toMatch(/\d{1,}/) //TODO: Resultado sea number
  })

  it(`Revisar operacion matematica`, () => {
    const numberA = 5
    const numberB = 4
    const check = service.checkOperation(numberA, numberB, 9)
    expect(check).toBeTrue()
  })

});
