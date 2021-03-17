/**
 * Modum MODsense API
 * Allows you to interact with the modum system
 *
 * The version of the OpenAPI document: 4.3.2
 * Contact: support@modum.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The Auth model module.
 * @module model/Auth
 * @version 4.3.2
 */
class Auth {
    /**
     * Constructs a new <code>Auth</code>.
     * @alias module:model/Auth
     * @param user {module:model/User} 
     * @param token {String} 
     * @param refreshToken {String} 
     */
    constructor(user, token, refreshToken) { 
        
        Auth.initialize(this, user, token, refreshToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user, token, refreshToken) { 
        obj['user'] = user;
        obj['token'] = token;
        obj['refreshToken'] = refreshToken;
    }

    /**
     * Constructs a <code>Auth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Auth} obj Optional instance to populate.
     * @return {module:model/Auth} The populated <code>Auth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Auth();

            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} user
 */
Auth.prototype['user'] = undefined;

/**
 * @member {String} token
 */
Auth.prototype['token'] = undefined;

/**
 * @member {String} refreshToken
 */
Auth.prototype['refreshToken'] = undefined;






export default Auth;

