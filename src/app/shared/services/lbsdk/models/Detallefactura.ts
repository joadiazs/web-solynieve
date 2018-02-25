/* tslint:disable */
import {
  Importe
} from '../index';

declare var Object: any;
export interface DetallefacturaInterface {
  "iddetallefactura"?: number;
  "nombre"?: number;
  importes?: Importe[];
}

export class Detallefactura implements DetallefacturaInterface {
  "iddetallefactura": number;
  "nombre": number;
  importes: Importe[];
  constructor(data?: DetallefacturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Detallefactura`.
   */
  public static getModelName() {
    return "Detallefactura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Detallefactura for dynamic purposes.
  **/
  public static factory(data: DetallefacturaInterface): Detallefactura{
    return new Detallefactura(data);
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
      name: 'Detallefactura',
      plural: 'Detallefacturas',
      path: 'Detallefacturas',
      idName: 'iddetallefactura',
      properties: {
        "iddetallefactura": {
          name: 'iddetallefactura',
          type: 'number'
        },
        "nombre": {
          name: 'nombre',
          type: 'number'
        },
      },
      relations: {
        importes: {
          name: 'importes',
          type: 'Importe[]',
          model: 'Importe',
          relationType: 'hasMany',
                  keyFrom: 'iddetallefactura',
          keyTo: 'iddetalle'
        },
      }
    }
  }
}
