import { Injectable } from '@angular/core';
import { DomicilioApi, Domicilio } from '.';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DomicilioService {

  constructor(private domicilioApi: DomicilioApi) { }


  create(domicilio: Domicilio): Observable <Domicilio> {
    return this.domicilioApi.create(domicilio);
  }
}
