import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-apresentacao',
  templateUrl: './pagina-apresentacao.component.html',
  styleUrls: ['./pagina-apresentacao.component.scss']
})
export class PaginaApresentacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('foi')
  }

}
