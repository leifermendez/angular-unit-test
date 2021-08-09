import { AuthService } from './services/auth.service';
import { Data } from './models/data';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'Ejercicio #1 Unit Testing Angular';
  subTitle = 'Estamos creando este ejercicio para comenzar a aprender sobre pruebas unitarias en componentes'
  contentEmoji = ''
  dataSession: any;
  form: FormGroup = new FormGroup({})
  isCheck: any;
  checkHuman: Array<any> = []

  constructor(private fb: FormBuilder, private authService: AuthService,
    private dataService: DataService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      result: ['', [Validators.required]],
    })

    this.checkHuman = this.dataService.generateNumbers()
  }

  sendLogin(): void {
    const [numberA, numberB] = this.checkHuman;
    const result = this.form.value.result
    const check = this.dataService.checkOperation(numberA, numberB, result)
    console.log('___', check)
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.login(email, password)
      .subscribe(res => this.dataSession = res,
        (err: any) => this.isCheck = 'ERROR_USER')
  }
}
