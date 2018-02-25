import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, UsuarioApi, Usuario } from './lbsdk/index'

@Injectable()
export class UsuarioService {

  // user
  user: Usuario | null;
  id: string | null;
  constructor(private usuarioApi: UsuarioApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

  }

  getAll(filtro: any = {}): Observable<Usuario[]> {
    return this.usuarioApi.find(filtro);
  }

  getbyId(id: number): Observable<Usuario> {
    return this.usuarioApi.findById(id);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.usuarioApi.create(usuario);
  }

  update(estado: Usuario): Observable<Usuario> {
    return this.usuarioApi.patchAttributes(estado.idusuario, estado);
  }

  delete(estado: Usuario): Observable<{}> {
    return this.usuarioApi.deleteById(estado.idusuario);
  }

  login(credenciales: any): Observable<any> {
    return this.usuarioApi.login(credenciales);
  }

  logout(): Observable<any> {
    return this.usuarioApi.logout()
  }

  accessToken(id): Observable<any> {
    return this.usuarioApi.createAccessTokens(id)
  }
}
