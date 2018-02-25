import { Injectable } from '@angular/core';
import { LoteApi, Lote } from './index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoteService {

  constructor(private loteApi: LoteApi) { }

  getAll(filtro?: any): Observable<Lote[]> {
    return this.loteApi.find(filtro);
  }

  getById(idlote: number, filter?: any): Observable<Lote> {
    return this.loteApi.findById(idlote, filter);
  }

  create(lote: Lote): Observable<Lote> {
    return this.loteApi.create(lote);
  }

  update(lote: Lote): Observable<Lote> {
    return this.loteApi.patchAttributes(lote.idlote, lote);
  }

  delete(idlote: number): Observable<Lote> {
    return this.loteApi.deleteById(idlote);
  }

  getCount(filter?: any): Observable<{}> {
    return this.loteApi.count(filter)
  }

}
