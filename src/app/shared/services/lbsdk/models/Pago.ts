/* tslint:disable */

declare var Object: any;
export interface PagoInterface {
  "idpago"?: number;
  "idfactura": number;
  "bimestre"?: number;
  "anho": Date;
  "vencimiento": Date;
  "serial": number;
}

export class Pago implements PagoInterface {
  "idpago": number;
  "idfactura": number;
  "bimestre": number;
  "anho": Date;
  "vencimiento": Date;
  "serial": number;
  constructor(data?: PagoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pago`.
   */
  public static getModelName() {
    return "Pago";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pago for dynamic purposes.
  **/
  public static factory(data: PagoInterface): Pago{
    return new Pago(data);
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
      name: 'Pago',
      plural: 'Pagos',
      path: 'Pagos',
      idName: 'idpago',
      properties: {
        "idpago": {
          name: 'idpago',
          type: 'number'
        },
        "idfactura": {
          name: 'idfactura',
          type: 'number'
        },
        "bimestre": {
          name: 'bimestre',
          type: 'number'
        },
        "anho": {
          name: 'anho',
          type: 'Date'
        },
        "vencimiento": {
          name: 'vencimiento',
          type: 'Date'
        },
        "serial": {
          name: 'serial',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
