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
    let idlote: number = event.data.idlote
    this.router.navigate(['/lote'], { queryParams: { idlote: idlote } });
  }

  nuevoLote() {
    this.router.navigate(['/lote']);
  }


}
