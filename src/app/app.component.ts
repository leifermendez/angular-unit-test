import { Data } from './models/data';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

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
  listData: Data[] = []

  constructor(private dataService: DataService) {

  }

  clickBtn(): void {
    this.showEmoji = true;
    this.contentEmoji = '😁😁😁😁😁😁😁'
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.dataService.getData()
      .subscribe(data => this.listData = data)
  }
}
