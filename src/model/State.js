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
* Enum class State.
* @enum {}
* @readonly
*/
export default class State {
    
        /**
         * value: "IN_TRANSIT"
         * @const
         */
        "IN_TRANSIT" = "IN_TRANSIT";

    
        /**
         * value: "EXAMINATION_REQUIRED"
         * @const
         */
        "EXAMINATION_REQUIRED" = "EXAMINATION_REQUIRED";

    
        /**
         * value: "COMPLIANT"
         * @const
         */
        "COMPLIANT" = "COMPLIANT";

    
        /**
         * value: "NON_COMPLIANT"
         * @const
         */
        "NON_COMPLIANT" = "NON_COMPLIANT";

    
        /**
         * value: "ERRONEOUS"
         * @const
         */
        "ERRONEOUS" = "ERRONEOUS";

    
        /**
         * value: "ERRONEOUS_ACKNOWLEDGED"
         * @const
         */
        "ERRONEOUS_ACKNOWLEDGED" = "ERRONEOUS_ACKNOWLEDGED";

    
        /**
         * value: "MISSING_DATA"
         * @const
         */
        "MISSING_DATA" = "MISSING_DATA";

    
        /**
         * value: "MISSING_DATA_ACKNOWLEDGED"
         * @const
         */
        "MISSING_DATA_ACKNOWLEDGED" = "MISSING_DATA_ACKNOWLEDGED";

    

    /**
    * Returns a <code>State</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/State} The enum <code>State</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

