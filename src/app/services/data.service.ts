import { Data } from './../models/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataMock: Data[] = [
    {
      title: 'Hola',
      description: 'Mundo'
    },
    {
      title: 'Suscribete',
      description: 'Genial'
    }
  ]
  constructor() { }

  getData(): Observable<Data[]> {
    return of(this.dataMock)
  }
}
