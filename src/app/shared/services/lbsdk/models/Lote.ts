/* tslint:disable */
import {
  Socio
} from '../index';

declare var Object: any;
export interface LoteInterface {
  "idlote"?: number;
  "idsocio"?: number;
  "numero"?: number;
  "manzana"?: number;
  "frente"?: number;
  "edificado"?: number;
  "nrovalvulas"?: number;
  "residuos"?: number;
  socio?: Socio;
}

export class Lote implements LoteInterface {
  "idlote": number;
  "idsocio": number;
  "numero": number;
  "manzana": number;
  "frente": number;
  "edificado": number;
  "nrovalvulas": number;
  "residuos": number;
  socio: Socio;
  constructor(data?: LoteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Lote`.
   */
  public static getModelName() {
    return "Lote";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Lote for dynamic purposes.
  **/
  public static factory(data: LoteInterface): Lote{
    return new Lote(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Lote',
      plural: 'Lotes',
      path: 'Lotes',
      idName: 'idlote',
      properties: {
        "idlote": {
          name: 'idlote',
          type: 'number'
        },
        "idsocio": {
          name: 'idsocio',
          type: 'number'
        },
        "numero": {
          name: 'numero',
          type: 'number'
        },
        "manzana": {
          name: 'manzana',
          type: 'number'
        },
        "frente": {
          name: 'frente',
          type: 'number'
        },
        "edificado": {
          name: 'edificado',
          type: 'number'
        },
        "nrovalvulas": {
          name: 'nrovalvulas',
          type: 'number'
        },
        "residuos": {
          name: 'residuos',
          type: 'number'
        },
      },
      relations: {
        socio: {
          name: 'socio',
          type: 'Socio',
          model: 'Socio',
          relationType: 'belongsTo',
                  keyFrom: 'idsocio',
          keyTo: 'idsocio'
        },
      }
    }
  }
}
