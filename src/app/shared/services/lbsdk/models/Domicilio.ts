/* tslint:disable */
import {
  Factura
} from '../index';

declare var Object: any;
export interface DomicilioInterface {
  "iddomicilio": number;
  "calle"?: number;
  "numero"?: number;
  "departamento"?: number;
  factura?: Factura;
}

export class Domicilio implements DomicilioInterface {
  "iddomicilio": number;
  "calle": number;
  "numero": number;
  "departamento": number;
  factura: Factura;
  constructor(data?: DomicilioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domicilio`.
   */
  public static getModelName() {
    return "Domicilio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Domicilio for dynamic purposes.
  **/
  public static factory(data: DomicilioInterface): Domicilio{
    return new Domicilio(data);
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
      name: 'Domicilio',
      plural: 'Domicilios',
      path: 'Domicilios',
      idName: 'iddomicilio',
      properties: {
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
        "calle": {
          name: 'calle',
          type: 'number'
        },
        "numero": {
          name: 'numero',
          type: 'number'
        },
        "departamento": {
          name: 'departamento',
          type: 'number'
        },
      },
      relations: {
        factura: {
          name: 'factura',
          type: 'Factura',
          model: 'Factura',
          relationType: 'hasOne',
                  keyFrom: 'iddomicilio',
          keyTo: 'iddomicilio'
        },
      }
    }
  }
}
