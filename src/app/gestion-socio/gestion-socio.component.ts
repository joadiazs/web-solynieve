import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioService } from '../shared/services/socio.service';
import { Socio, Factura, Domicilio } from '../shared/services/index';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-gestion-socio',
  templateUrl: './gestion-socio.component.html',
  styleUrls: ['./gestion-socio.component.css']
})
export class GestionSocioComponent implements OnInit {

  socioSeleccionado: Socio = new Socio();
  message: Message[] = [];
  listafacturas: Factura[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socioService: SocioService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {
        let aux = JSON.stringify(params)
        if (aux.length > 2) {
          this.socioService.getById(params.idsocio, { include: [{ relation: "domicilio" }, { relation: "facturas" }] })
            .subscribe((serie: Socio) => {
              this.socioSeleccionado = serie;
              this.socioSeleccionado.domicilio = new Domicilio();
              console.log("SOCIOS", this.socioSeleccionado)
            }, (err => console.log(err.message)))
        }
      })
  }

  guardar() { }

}
