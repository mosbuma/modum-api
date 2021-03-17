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
import OneOfobjectobjectobjectobjectobjectobjectobject from './OneOfobjectobjectobjectobjectobjectobjectobject';
import ShipmentsShipmentIdEventsNotifications from './ShipmentsShipmentIdEventsNotifications';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 4.3.2
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     * @param id {String} 
     * @param type {module:model/InlineResponse2002.TypeEnum} 
     * @param eventTime {Date} 
     */
    constructor(id, type, eventTime) { 
        
        InlineResponse2002.initialize(this, id, type, eventTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, eventTime) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['event_time'] = eventTime;
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('event_time')) {
                obj['event_time'] = ApiClient.convertToType(data['event_time'], 'Date');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], OneOfobjectobjectobjectobjectobjectobjectobject);
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [ShipmentsShipmentIdEventsNotifications]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2002.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse2002.TypeEnum} type
 */
InlineResponse2002.prototype['type'] = undefined;

/**
 * @member {Date} event_time
 */
InlineResponse2002.prototype['event_time'] = undefined;

/**
 * additional data relating to the event. format depends on the type of the event. note that MISSING events have data set to null.
 * @member {module:model/OneOfobjectobjectobjectobjectobjectobjectobject} data
 */
InlineResponse2002.prototype['data'] = undefined;

/**
 * all users that were informed about this shipment event
 * @member {Array.<module:model/ShipmentsShipmentIdEventsNotifications>} notifications
 */
InlineResponse2002.prototype['notifications'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2002['TypeEnum'] = {

    /**
     * value: "TRANSIT"
     * @const
     */
    "TRANSIT": "TRANSIT",

    /**
     * value: "FINAL_DATA"
     * @const
     */
    "FINAL_DATA": "FINAL_DATA",

    /**
     * value: "MANUAL_STATE_TRANSITION"
     * @const
     */
    "MANUAL_STATE_TRANSITION": "MANUAL_STATE_TRANSITION",

    /**
     * value: "COMMENT"
     * @const
     */
    "COMMENT": "COMMENT",

    /**
     * value: "MISSING"
     * @const
     */
    "MISSING": "MISSING",

    /**
     * value: "SNAPSHOT_ALARM"
     * @const
     */
    "SNAPSHOT_ALARM": "SNAPSHOT_ALARM",

    /**
     * value: "SWISSPOST"
     * @const
     */
    "SWISSPOST": "SWISSPOST"
};



export default InlineResponse2002;
