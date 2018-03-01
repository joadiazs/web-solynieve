/* tslint:disable */
import {
  Domicilio,
  Factura
} from '../index';

declare var Object: any;
export interface SocioInterface {
  "idsocio"?: number;
  "nombre"?: string;
  "apellido"?: string;
  "dni"?: number;
  "fechanac"?: Date;
  "cuitcuil"?: string;
  "espersona"?: number;
  "telefono"?: number;
  "nrosocio"?: number;
  "iddomicilio"?: number;
  domicilio?: Domicilio;
  facturas?: Factura[];
}

export class Socio implements SocioInterface {
  "idsocio": number;
  "nombre": string;
  "apellido": string;
  "dni": number;
  "fechanac": Date;
  "cuitcuil": string;
  "espersona": number;
  "telefono": number;
  "nrosocio": number;
  "iddomicilio": number;
  domicilio: Domicilio;
  facturas: Factura[];
  constructor(data?: SocioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Socio`.
   */
  public static getModelName() {
    return "Socio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Socio for dynamic purposes.
  **/
  public static factory(data: SocioInterface): Socio{
    return new Socio(data);
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
      name: 'Socio',
      plural: 'Socios',
      path: 'Socios',
      idName: 'idsocio',
      properties: {
        "idsocio": {
          name: 'idsocio',
          type: 'number'
        },
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "apellido": {
          name: 'apellido',
          type: 'string'
        },
        "dni": {
          name: 'dni',
          type: 'number'
        },
        "fechanac": {
          name: 'fechanac',
          type: 'Date'
        },
        "cuitcuil": {
          name: 'cuitcuil',
          type: 'string'
        },
        "espersona": {
          name: 'espersona',
          type: 'number'
        },
        "telefono": {
          name: 'telefono',
          type: 'number'
        },
        "nrosocio": {
          name: 'nrosocio',
          type: 'number'
        },
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
      },
      relations: {
        domicilio: {
          name: 'domicilio',
          type: 'Domicilio',
          model: 'Domicilio',
          relationType: 'belongsTo',
                  keyFrom: 'iddomicilio',
          keyTo: 'iddomicilio'
        },
        facturas: {
          name: 'facturas',
          type: 'Factura[]',
          model: 'Factura',
          relationType: 'hasMany',
                  keyFrom: 'idsocio',
          keyTo: 'idsocio'
        },
      }
    }
  }
}
