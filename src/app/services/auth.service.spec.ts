import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };
  ;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia retornar login 200', (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockUserCredentials = {
      email: 'leifer33@gmail.com',
      password: '123456'
    }

    const mockResultLogin = {
      "data": {
        "id": 1,
        "user": "Leifer"
      }
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin));

    //TODO: Act
    const { email, password } = mockUserCredentials
    service.login(email, password)
      .subscribe(res => {
        expect(res).toEqual(mockResultLogin)
        done()
      })
  });

  it(`Deberia retornar error 409`, (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockUserCredentials = {
      email: 'leifer33@gmail.com',
      password: ''
    }

    const error409 = new HttpErrorResponse({
      error: "Invalid user",
      status: 409, statusText: 'Not Found'
    })

    httpClientSpy.post.and.returnValue(throwError(error409))

    //TODO:Act
    const { email, password } = mockUserCredentials
    service.login(email, password)
      .subscribe(res => {

      },
        error => {
          expect(error.status).toEqual(409);
          done()
        })

  })

});
