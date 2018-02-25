import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lote, Socio, Factura } from '../shared/services/index';
import { LoteService } from '../shared/services/lote.service';
import { Message, SelectItem } from 'primeng/primeng';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocioService } from '../shared/services/socio.service';

@Component({
  selector: 'app-gestion-lote',
  templateUrl: './gestion-lote.component.html',
  styleUrls: ['./gestion-lote.component.css']
})
export class GestionLoteComponent implements OnInit {

  loteSeleccionado: Lote = new Lote();
  message: Message[] = [];
  manzanas: SelectItem[] = [];
  manzanaSeleccionada: Manzana;
  listaSocios: Socio[] = [];
  listafacturas: Factura[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loteService: LoteService,
    private socioService: SocioService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {
        let aux = JSON.stringify(params)
        if (aux.length > 2) {
          this.loteService.getById(params.idlote, { include: [{ relation: "socio", scope: { include: { relation: "facturas", scope: { order: "fechaemision DESC" } } } }] })
            .subscribe((lote: Lote) => {
              this.loteSeleccionado = lote;
              this.listafacturas = this.loteSeleccionado.socio.facturas;
            }, (err => console.log(err.message)))
        }
      })
    this.listarManzanas();
  }

  listarManzanas() {
    let array: Manzana[] = [
      { nombre: "A" },
      { nombre: "B" },
      { nombre: "C" },
      { nombre: "D" },
      { nombre: "E" },
      { nombre: "F" },
      { nombre: "G" },
      { nombre: "H" },
      { nombre: "I" },
      { nombre: "J" },
      { nombre: "K" },
      { nombre: "L" }
    ];
    array.forEach(arr => {
      this.manzanas.push({ value: arr.nombre, label: arr.nombre })
    })
  }

  clickManzana(event) {
    this.manzanaSeleccionada = <Manzana>event.value;
    this.loteSeleccionado.manzana = this.manzanaSeleccionada.nombre;
  }

  guardar() {
    this.loteSeleccionado.idsocio = this.loteSeleccionado.socio.idsocio;
    if (this.loteSeleccionado.idlote) {
      this.loteService.update(this.loteSeleccionado)
        .subscribe((lote: Lote) => {
          this.router.navigate(['/lotes'])
        }, (err => console.log(err.message)))
    } else {
      this.loteService.create(this.loteSeleccionado)
        .subscribe((lote: Lote) => {
          this.router.navigate(['/lotes'])
        }, (err => console.log(err.message)))
    }
  }

  buscarSocioXnombre(event) {
    event.query = event.query.toUpperCase();
    this.socioService.getAll()
      .subscribe((socios: Socio[]) => {
        socios = socios.filter((socio: Socio) => {
          if (socio.nombre.startsWith(event.query) || socio.apellido.startsWith(event.query)) {
            return socio;
          }
        });
        this.listaSocios = socios;
      }, (err => console.log(err.message)))
  }

  buscarSocioXdni(event) {
    event.query = event.query.toUpperCase();
    this.socioService.getAll()
      .subscribe((socios: Socio[]) => {
        socios = socios.filter((socio: Socio) => {
          if (socio.dni.startsWith(event.query)) {
            return socio;
          }
        });
        this.listaSocios = socios;
      }, (err => console.log(err.message)))
  }

}

interface Manzana {
  nombre: string
}