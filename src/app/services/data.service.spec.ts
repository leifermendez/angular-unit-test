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

  // it('deberia de retornar una lista', () => {
  //   service.getData().subscribe(res => {

  //   })
  //   expect(service).toBeTruthy();
  // });
});
