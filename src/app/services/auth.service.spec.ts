import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { AuthService } from './auth.service';

describe('(3) Prueba a "AuthService"', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy }; //TODO: 🙄

  beforeEach(() => { //TODO: Antes de cada it (prueba)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  //TODO: Que se cree!
  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Debe retornar objecto del usuario
  it('Deberia retornar objecto usuario (Login Correcto)', (done: DoneFn) => {

    //TODO: Mock de datos!

    const mockUserCredentials = { //TODO: Exito!
      email: 'leifer33@gmail.com',
      password: '123456'
    }

    const mockResultLogin = {
      "data": {
        "id": 2,
        "user": "Leifer"
      }
    }

    httpClientSpy.post.and.returnValue(of(mockResultLogin)) //TODO: Observable!

    //TODO: Act

    const { email, password } = mockUserCredentials

    service.login(email, password)
      .subscribe(resultado => { //TODO: No se sabe el tiempo 
        expect(resultado).toEqual(mockResultLogin)
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
