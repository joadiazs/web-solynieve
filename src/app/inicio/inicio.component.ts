import { Component, OnInit } from '@angular/core';
import { SocioService } from '../shared/services/socio.service';
import { LoteService } from '../shared/services/lote.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  totalSocios: number;
  totalLotes: number;
  periodoActual: string = "";
  anhoPasado: string;
  fechaCompleta: Date;

  constructor(
    private socioService: SocioService,
    private loteService: LoteService
  ) { }

  ngOnInit() {
    this.obtenerTotalUsuarios();
    this.obtenerTotalLotes();
    this.obtenerPeriodoActual();
  }

  obtenerTotalUsuarios() {
    this.socioService.getCount()
      .subscribe((number: any) => {
        this.totalSocios = number.count;
        console.log(this.totalSocios)
      }, (err => console.log(err.message)))
  }

  obtenerTotalLotes() {
    this.loteService.getCount()
      .subscribe((number: any) => {
        this.totalLotes = number.count;
        console.log(this.totalLotes)
      }, (err => console.log(err.message)))
  }

  obtenerPeriodoActual() {
    this.fechaCompleta = new Date();
    this.anhoPasado = (new Date(this.fechaCompleta).getFullYear() -1).toString();
    let mes = new Date(this.fechaCompleta).getMonth();
    if (mes >= 0 && mes < 2) {
      this.periodoActual = "Primer";
    } else if (mes >= 2 && mes < 4) {
      this.periodoActual = "Segundo";
    } else if (mes >= 4 && mes < 6) {
      this.periodoActual = "Tercer";
    } else if (mes >= 6 && mes < 8) {
      this.periodoActual = "Cuarto";
    } else if (mes >= 8 && mes < 10) {
      this.periodoActual = "Quinto";
    } else if (mes >= 10 && mes < 12) {
      this.periodoActual = "Sexto";
    }
  }
}