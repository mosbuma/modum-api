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

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 4.3.2
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     * @param noncePrefix {String} 
     * @param macAddress {String} 
     */
    constructor(noncePrefix, macAddress) { 
        
        InlineObject.initialize(this, noncePrefix, macAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, noncePrefix, macAddress) { 
        obj['nonce_prefix'] = noncePrefix;
        obj['mac_address'] = macAddress;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('nonce_prefix')) {
                obj['nonce_prefix'] = ApiClient.convertToType(data['nonce_prefix'], 'String');
            }
            if (data.hasOwnProperty('mac_address')) {
                obj['mac_address'] = ApiClient.convertToType(data['mac_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} nonce_prefix
 */
InlineObject.prototype['nonce_prefix'] = undefined;

/**
 * @member {String} mac_address
 */
InlineObject.prototype['mac_address'] = undefined;






export default InlineObject;

