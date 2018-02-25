/* tslint:disable */
import { Injectable } from '@angular/core';
import { Socio } from '../../models/Socio';
import { Pago } from '../../models/Pago';
import { Importe } from '../../models/Importe';
import { Detallefactura } from '../../models/Detallefactura';
import { Usuario } from '../../models/Usuario';
import { Factura } from '../../models/Factura';
import { Domicilio } from '../../models/Domicilio';
import { Lote } from '../../models/Lote';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Socio: Socio,
    Pago: Pago,
    Importe: Importe,
    Detallefactura: Detallefactura,
    Usuario: Usuario,
    Factura: Factura,
    Domicilio: Domicilio,
    Lote: Lote,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
