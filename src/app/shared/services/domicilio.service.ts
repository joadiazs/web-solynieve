import { Injectable } from '@angular/core';
import { DomicilioApi, Domicilio } from '.';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DomicilioService {

  constructor(private domicilioApi: DomicilioApi) { }


  create(domicilio: Domicilio): Observable <Domicilio> {
    return this.domicilioApi.create(domicilio);
  }

  update(domicilio:Domicilio): Observable <Domicilio> {
    return this.domicilioApi.patchAttributes(domicilio.iddomicilio, domicilio);
  }

  delete(iddomicilio: number): Observable <Domicilio> {
    return this.domicilioApi.deleteById(iddomicilio);
  }

}
