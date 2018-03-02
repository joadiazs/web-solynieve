import { Injectable } from '@angular/core';
import { SocioApi, Socio } from './index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocioService {

  constructor(private socioApi: SocioApi) { }

  getAll(filtro?: any): Observable<Socio[]> {
    return this.socioApi.find(filtro);
  }

  getById(idsocio: number, filter?: any): Observable<Socio> {
    return this.socioApi.findById(idsocio, filter);
  }

  create(socio: Socio): Observable<Socio> {
    return this.socioApi.create(socio);
  }

  update(socio: Socio): Observable<Socio> {
    return this.socioApi.patchAttributes(socio.idsocio, socio);
  }

  delete(idsocio: number): Observable<Socio> {
    return this.socioApi.deleteById(idsocio);
  }

  getCount(filter?: any): Observable<{}> {
    return this.socioApi.count(filter)
  }
}
