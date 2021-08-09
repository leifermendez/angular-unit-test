import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //TODO: email, password

  public login(email: string, password: string): Observable<any> {
    const body = { email, password }
    return this.http.post(`${environment.api}/auth/login`, body)
  }
}
