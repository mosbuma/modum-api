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
 * The UpdateFieldRequest model module.
 * @module model/UpdateFieldRequest
 * @version 4.3.2
 */
class UpdateFieldRequest {
    /**
     * Constructs a new <code>UpdateFieldRequest</code>.
     * @alias module:model/UpdateFieldRequest
     * @param active {Boolean} 
     * @param type {String} 
     * @param name {String} 
     * @param required {Boolean} 
     * @param showInTemperatureGraph {Boolean} 
     */
    constructor(active, type, name, required, showInTemperatureGraph) { 
        
        UpdateFieldRequest.initialize(this, active, type, name, required, showInTemperatureGraph);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, type, name, required, showInTemperatureGraph) { 
        obj['active'] = active;
        obj['type'] = type;
        obj['name'] = name;
        obj['required'] = required;
        obj['show_in_temperature_graph'] = showInTemperatureGraph;
    }

    /**
     * Constructs a <code>UpdateFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFieldRequest} obj Optional instance to populate.
     * @return {module:model/UpdateFieldRequest} The populated <code>UpdateFieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFieldRequest();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('show_in_temperature_graph')) {
                obj['show_in_temperature_graph'] = ApiClient.convertToType(data['show_in_temperature_graph'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
UpdateFieldRequest.prototype['active'] = undefined;

/**
 * @member {String} type
 */
UpdateFieldRequest.prototype['type'] = undefined;

/**
 * @member {String} name
 */
UpdateFieldRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} required
 */
UpdateFieldRequest.prototype['required'] = undefined;

/**
 * @member {Boolean} show_in_temperature_graph
 */
UpdateFieldRequest.prototype['show_in_temperature_graph'] = undefined;






export default UpdateFieldRequest;

