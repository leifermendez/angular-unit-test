import { Data } from './../models/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  generateNumbers(): any {
    const numberA = (Math.random() * 10).toFixed(0)
    const numberB = (Math.random() * 5).toFixed(0)
    return [numberA, numberB]
  }

  checkOperation(numberA: number, numberB: number, result: number): boolean {
    const check = (Number(numberA) + Number(numberB)) === Number(result)
    return check
  }
}
