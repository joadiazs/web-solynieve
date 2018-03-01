/* tslint:disable */

declare var Object: any;
export interface FacturaInterface {
  "idfactura"?: number;
  "iddomicilio"?: number;
  "nrofactura": number;
  "idsocio"?: number;
  "fechaemision"?: number;
  "enviaralote": number;
}

export class Factura implements FacturaInterface {
  "idfactura": number;
  "iddomicilio": number;
  "nrofactura": number;
  "idsocio": number;
  "fechaemision": number;
  "enviaralote": number;
  constructor(data?: FacturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Factura`.
   */
  public static getModelName() {
    return "Factura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Factura for dynamic purposes.
  **/
  public static factory(data: FacturaInterface): Factura{
    return new Factura(data);
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
      name: 'Factura',
      plural: 'Facturas',
      path: 'Facturas',
      idName: 'idfactura',
      properties: {
        "idfactura": {
          name: 'idfactura',
          type: 'number'
        },
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
        "nrofactura": {
          name: 'nrofactura',
          type: 'number'
        },
        "idsocio": {
          name: 'idsocio',
          type: 'number'
        },
        "fechaemision": {
          name: 'fechaemision',
          type: 'number'
        },
        "enviaralote": {
          name: 'enviaralote',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
