/* tslint:disable */
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Domicilio } from '../../models/Domicilio';
import { Detallefactura } from '../../models/Detallefactura';
import { Factura } from '../../models/Factura';
import { Importe } from '../../models/Importe';
import { Lote } from '../../models/Lote';
import { Pago } from '../../models/Pago';
import { Socio } from '../../models/Socio';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Usuario: Usuario,
    Domicilio: Domicilio,
    Detallefactura: Detallefactura,
    Factura: Factura,
    Importe: Importe,
    Lote: Lote,
    Pago: Pago,
    Socio: Socio,
    
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
