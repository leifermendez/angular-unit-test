import { Data } from './../models/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateNumbers(): any { //TODO: Genera 2 numberos random
    const numberA = (Math.random() * 10).toFixed(0)
    const numberB = (Math.random() * 5).toFixed(0)
    return [numberA, numberB]
  }

  //TODO: Recibe 3 parametros 2 numeros y una respuesta
  checkOperation(numberA: number, numberB: number, result: number): boolean {
    const check = (Number(numberA) + Number(numberB)) === Number(result)
    return check
  }
}
