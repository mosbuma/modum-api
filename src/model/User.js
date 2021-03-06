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
import Language from './Language';

/**
 * The User model module.
 * @module model/User
 * @version 4.3.2
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('company_id')) {
                obj['company_id'] = ApiClient.convertToType(data['company_id'], 'String');
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'String');
            }
            if (data.hasOwnProperty('role_name')) {
                obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = Language.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('is_activated')) {
                obj['is_activated'] = ApiClient.convertToType(data['is_activated'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
User.prototype['created_at'] = undefined;

/**
 * @member {Date} deleted_at
 */
User.prototype['deleted_at'] = undefined;

/**
 * @member {String} first_name
 */
User.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
User.prototype['last_name'] = undefined;

/**
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
User.prototype['phone'] = undefined;

/**
 * @member {String} company_id
 */
User.prototype['company_id'] = undefined;

/**
 * @member {String} role_id
 */
User.prototype['role_id'] = undefined;

/**
 * @member {String} role_name
 */
User.prototype['role_name'] = undefined;

/**
 * @member {module:model/Language} language
 */
User.prototype['language'] = undefined;

/**
 * @member {Object} is_activated
 */
User.prototype['is_activated'] = undefined;






export default User;

