import { Injectable } from '@angular/core';
import { FacturaApi, Factura } from './index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FacturaService {

  constructor(private facturaApi: FacturaApi) { }

  getAll(filtro?: any): Observable<Factura[]> {
    return this.facturaApi.find(filtro);
  }

  create(factura: Factura): Observable<Factura> {
    return this.facturaApi.create(factura);
  }

  update(factura: Factura): Observable<Factura> {
    return this.facturaApi.patchAttributes(factura);
  }

  delete(idfactura: number): Observable<Factura> {
    return this.facturaApi.deleteById(idfactura);
  }

}
