/* tslint:disable */
import {
  Detallefactura,
  Factura
} from '../index';

declare var Object: any;
export interface ImporteInterface {
  "idimporte"?: number;
  "idfactura": number;
  "iddetalle"?: number;
  "importe"?: number;
  detallefactura?: Detallefactura;
  factura?: Factura;
}

export class Importe implements ImporteInterface {
  "idimporte": number;
  "idfactura": number;
  "iddetalle": number;
  "importe": number;
  detallefactura: Detallefactura;
  factura: Factura;
  constructor(data?: ImporteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Importe`.
   */
  public static getModelName() {
    return "Importe";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Importe for dynamic purposes.
  **/
  public static factory(data: ImporteInterface): Importe{
    return new Importe(data);
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
      name: 'Importe',
      plural: 'Importes',
      path: 'Importes',
      idName: 'idimporte',
      properties: {
        "idimporte": {
          name: 'idimporte',
          type: 'number'
        },
        "idfactura": {
          name: 'idfactura',
          type: 'number'
        },
        "iddetalle": {
          name: 'iddetalle',
          type: 'number'
        },
        "importe": {
          name: 'importe',
          type: 'number'
        },
      },
      relations: {
        detallefactura: {
          name: 'detallefactura',
          type: 'Detallefactura',
          model: 'Detallefactura',
          relationType: 'belongsTo',
                  keyFrom: 'iddetalle',
          keyTo: 'iddetallefactura'
        },
        factura: {
          name: 'factura',
          type: 'Factura',
          model: 'Factura',
          relationType: 'belongsTo',
                  keyFrom: 'idfactura',
          keyTo: 'idfactura'
        },
      }
    }
  }
}
