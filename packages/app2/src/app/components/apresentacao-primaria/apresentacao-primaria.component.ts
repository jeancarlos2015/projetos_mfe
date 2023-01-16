import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentacao-primaria',
  templateUrl: './apresentacao-primaria.component.html',
  styleUrls: ['./apresentacao-primaria.component.scss']
})
export class ApresentacaoPrimariaComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {

  }

  acessar(){
    this.router.navigate(["/app2/apresentacao"])
  }

}
