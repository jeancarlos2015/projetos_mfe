import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];
  title = 'navbar';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'App 2', icon: 'pi pi-fw pi-calendar', routerLink:"app2"},
      {label: 'App 3', icon: 'pi pi-fw pi-pencil', routerLink:"app3"},
  ];
  }
}
