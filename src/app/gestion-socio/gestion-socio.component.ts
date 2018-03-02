import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocioService } from '../shared/services/socio.service';
import { Socio, Factura, Domicilio } from '../shared/services/index';
import { Message } from 'primeng/primeng';
import { DomicilioService } from '../shared/services/domicilio.service';

@Component({
  selector: 'app-gestion-socio',
  templateUrl: './gestion-socio.component.html',
  styleUrls: ['./gestion-socio.component.css']
})
export class GestionSocioComponent implements OnInit {

  socio: Socio = new Socio();
  domicilio: Domicilio = new Domicilio();
  listafacturas: Factura[] = [];
  message: Message[] = [];
  socioForm: FormGroup;

  constructor(
    private socioService: SocioService,
    private domicilioService: DomicilioService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.socioForm = fb.group({
      'numeroSocio': [''],
      'nombreSocio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      'apellidoSocio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      'dniSocio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]],
      'cuilcuitSocio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      'fechanacSocio': ['', [Validators.required]],
      'telefonoSocio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(12)]],
      'calleDomicilio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      'numeroDomicilio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      'departamentoDomicilio': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],

    })
  }

  ngOnInit() {
    //this.listafacturas.push(new Factura({ idfactura: 1, nrofactura: 1, enviaralote: 1 }))
    this.route.queryParams
      .subscribe((params: any) => {
        let aux = JSON.stringify(params)
        if (aux.length > 2) {
          this.socioService.getById(params.idsocio, { include: [{ relation: "domicilio" }, { relation: "facturas" }] })
            .subscribe((socio: Socio) => {
              console.log("SOCIO ENCONTRADO:", socio)
              this.listafacturas = socio.facturas;
              this.socio = socio;
              this.domicilio = socio.domicilio;
            }, (err => console.log(err.message)))
        }
      })
    console.log(this.listafacturas)
  }

  guardar() {
    if (!this.socio.idsocio) {
      console.log("A CREAR")
      this.domicilioService.create(this.domicilio)
        .subscribe((domicilio: Domicilio) => {
          this.socio.iddomicilio = domicilio.iddomicilio;
          this.socioService.create(this.socio)
            .subscribe((socio: Socio) => {
              this.router.navigate(['/socios']);
              this.message = [];
              this.message.push({ severity: 'success', summary: 'Operación existosa!', detail: 'Se añadio un nuevo socio.' });
            }, (err => console.log(err.message)))
        }, (err => console.log(err.message)))
    } else {
      console.log("A MODIFICAR")      
      this.domicilioService.update(this.domicilio)
      .subscribe((domicilio: Domicilio) => {
        this.socioService.update(this.socio)
        .subscribe((socio: Socio) => {
          this.router.navigate(['/socios']);
          this.message = [];
          this.message.push({ severity: 'success', summary: 'Operación existosa!', detail: 'Se modifico el socio.' });
        }, (err => console.log(err.message)))
      }, (err => console.log(err.message)))
    }

  }

  inspeccionarFactura(factura) {
    console.log(factura)
  }

}
