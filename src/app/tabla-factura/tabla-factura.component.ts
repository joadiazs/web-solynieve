import { Component, OnInit } from '@angular/core';
import { Socio, Lote } from '../shared/services/index';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-tabla-factura',
  templateUrl: './tabla-factura.component.html',
  styleUrls: ['./tabla-factura.component.css']
})
export class TablaFacturaComponent implements OnInit {

  condicion: String = null;
  listaXSocio: Socio[] = [];
  listaXLote: Lote[]=[];
  message: Message[]=[];
  

  constructor() { }

  ngOnInit() {
  }

  buscarXSocio(){
    this.condicion = "socio";
  }
  buscarXLote(){
    this.condicion = "lote";
  }

}
