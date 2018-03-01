import { Component, OnInit } from '@angular/core';
import { Lote } from '../shared/services/index';
import { LoteService } from '../shared/services/lote.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-tabla-lotes',
  templateUrl: './tabla-lotes.component.html',
  styleUrls: ['./tabla-lotes.component.css']
})
export class TablaLotesComponent implements OnInit {

  listaLotes: Lote[] = [];
  idlote: number | null = null;
  textToFind: string = '';
  message: Message[] = []

  constructor(
    private router: Router,
    private loteService: LoteService
  ) { }

  ngOnInit() {
    this.obtenerLotes();
  }

  find() {
    this.obtenerLotes(this.getFilter())
  }

  getFilter(): any {
    let pattern = '/.*' + this.textToFind + '.*/i'
    if (this.textToFind.length > 1) {
      let filtro = {
        or: [
          { manzana: { regexp: pattern } },
          { numero: { regexp: pattern } }
        ]
      }
      return filtro;
    } else {
      return {};
    }
  }

  obtenerLotes(filter?: any) {
    this.loteService.getAll({ include: "socio" })
      .subscribe((Lotes: Lote[]) => {
        this.listaLotes = Lotes;
      }, (err => console.log(err.message)))
  }

  onRowSelect(event) {
    this.idlote = event.data.idlote
  }

  nuevoLote() {
    this.router.navigate(['/lote']);
  }

  modificarLote() {
    if (this.idlote && this.idlote > 0) {
      this.router.navigate(['/socio'], { queryParams: { idlote: this.idlote } });
    } else {
      this.message = [];
      this.message.push({ severity: 'info', summary: 'Operación inválida!', detail: 'Se debe seleccionar un lote.' });
    }
  }

  eliminarLote() {
    if (this.idlote && this.idlote > 0) {
      this.loteService.delete(this.idlote)
        .subscribe(() => {
          this.idlote = null;
          this.message = [];
          this.message.push({ severity: 'success', summary: 'Operación exitosa!', detail: 'Se elimino el registro.' });
        })
    } else {
      this.message = [];
      this.message.push({ severity: 'info', summary: 'Operación inválida!', detail: 'Se debe seleccionar un lote.' });
    }
  }

  generarExcel() {

  }


}
