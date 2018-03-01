/* tslint:disable */

declare var Object: any;
export interface UsuarioInterface {
  "idusuario"?: number;
  "idsocio": number;
  "email": string;
  "username": string;
  "realm"?: string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
}

export class Usuario implements UsuarioInterface {
  "idusuario": number;
  "idsocio": number;
  "email": string;
  "username": string;
  "realm": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usuario`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
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
      name: 'Usuario',
      plural: 'Usuarios',
      path: 'Usuarios',
      idName: 'idusuario',
      properties: {
        "idusuario": {
          name: 'idusuario',
          type: 'number'
        },
        "idsocio": {
          name: 'idsocio',
          type: 'number'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'idusuario',
          keyTo: 'userId'
        },
      }
    }
  }
}
