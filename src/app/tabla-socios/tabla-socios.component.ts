import { Component, OnInit } from '@angular/core';
import { SocioService } from '../shared/services/socio.service';
import { Socio } from '../shared/services/index';
import { Message } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-socios',
  templateUrl: './tabla-socios.component.html',
  styleUrls: ['./tabla-socios.component.css']
})
export class TablaSociosComponent implements OnInit {

  listaSocios: Socio[] = [];
  idsocio: number | null = null;
  textToFind: string = '';
  message: Message[] = []

  constructor(
    private socioService: SocioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerSocios();
  }

  find() {
    this.obtenerSocios(this.getFilter())
  }

  getFilter(): any {
    let pattern = '/.*' + this.textToFind + '.*/i'
    if (this.textToFind.length > 1) {
      let filtro = {
        or: [
          { nombre: { regexp: pattern } },
          { apellido: { regexp: pattern } },
          { dni: { regexp: pattern } },
          { cuitcuil: { regexp: pattern } }
        ]
      }
      return filtro;
    } else {
      return {};
    }
  }

  obtenerSocios(filter?: any) {
    this.socioService.getAll({ include: "lotes" })
      .subscribe((socios: Socio[]) => {
        this.listaSocios = socios;
      }, (err => console.log(err.message)))
  }

  onRowSelect(event) {
    this.idsocio = event.data.idlote;
  }

  nuevoSocio() {
    this.router.navigate(['/socio']);
  }

  modificarSocio() {
    if (this.idsocio && this.idsocio > 0) {
      this.router.navigate(['/socio'], { queryParams: { idsocio: this.idsocio } });
    } else {
      this.message = [];
      this.message.push({ severity: 'info', summary: 'Operación inválida!', detail: 'Se debe seleccionar un socio.' });
    }
  }

  eliminarSocio() {
    if (this.idsocio && this.idsocio > 0) {
      this.socioService.delete(this.idsocio)
        .subscribe(() => {
          this.idsocio = null;
          this.message = [];
          this.message.push({ severity: 'success', summary: 'Operación exitosa!', detail: 'Se elimino el registro.' });
        })
    } else {
      this.message = [];
      this.message.push({ severity: 'info', summary: 'Operación inválida!', detail: 'Se debe seleccionar un socio.' });
    }
  }

  generarExcel() {

  }


}
