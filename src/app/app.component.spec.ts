import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//TODO: "spec.ts <--"
//TODO: 😨 es la sintaxis de Jasmin!

describe(`(1) TEST del componente "AppComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  });

  //TODO:Aislado! 
  it('Debe de existir el AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy(); //TODO: ✔
  });

  //TODO:Aislado!
  it(`Debe de iniciarse "title" con "Ejercicio #1 Unit Testing Angular"`, () => {
    const titleTest = 'Ejercicio #1 Unit Testing Angular'
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(titleTest)
  });

  it(`Debe de actualizarse con emojis al click`, () => {

    const testContentEmoji = '😁😁😁😁😁😁😁'
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges()


    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    fixture.detectChanges()


    const elementEmoji = fixture.debugElement.query(By.css('.emoji-zone')).nativeElement.innerText
    expect(elementEmoji).toEqual(testContentEmoji);
  });


});
