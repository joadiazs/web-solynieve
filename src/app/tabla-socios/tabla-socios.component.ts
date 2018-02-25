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
  socioSeleccionado: Socio = new Socio();
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
    let idsocio: number = event.data.idlote    
    this.router.navigate(['/socio'], { queryParams: { idsocio: idsocio } });
  }

  nuevoSocio() {
    this.router.navigate(['/socio']);
  }


}
