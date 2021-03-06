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
 * The InlineResponse403 model module.
 * @module model/InlineResponse403
 * @version 4.3.2
 */
class InlineResponse403 {
    /**
     * Constructs a new <code>InlineResponse403</code>.
     * @alias module:model/InlineResponse403
     */
    constructor() { 
        
        InlineResponse403.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403} obj Optional instance to populate.
     * @return {module:model/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse403();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse403.StatusEnum} status
 */
InlineResponse403.prototype['status'] = undefined;

/**
 * @member {module:model/InlineResponse403.MessageEnum} message
 */
InlineResponse403.prototype['message'] = undefined;

/**
 * @member {module:model/InlineResponse403.ErrorEnum} error
 */
InlineResponse403.prototype['error'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
InlineResponse403['StatusEnum'] = {

    /**
     * value: 403
     * @const
     */
    "403": 403
};


/**
 * Allowed values for the <code>message</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse403['MessageEnum'] = {

    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden"
};


/**
 * Allowed values for the <code>error</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse403['ErrorEnum'] = {

    /**
     * value: "no_account_in_environment"
     * @const
     */
    "no_account_in_environment": "no_account_in_environment"
};



export default InlineResponse403;

