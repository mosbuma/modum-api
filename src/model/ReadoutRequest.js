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
 * The ReadoutRequest model module.
 * @module model/ReadoutRequest
 * @version 4.3.2
 */
class ReadoutRequest {
    /**
     * Constructs a new <code>ReadoutRequest</code>.
     * @alias module:model/ReadoutRequest
     * @param alertOccurred {Boolean} 
     * @param batteryData {String} 
     * @param batteryLow {Boolean} 
     * @param commissioningTime {String} 
     * @param firmwareVersionMajor {Number} 
     * @param firmwareVersionMinor {Number} 
     * @param firstMeasurement {String} 
     * @param hardwareError {Boolean} 
     * @param lastMeasurement {String} 
     * @param loggerExpired {Boolean} 
     * @param macAddress {String} 
     * @param memoryFull {Boolean} 
     * @param nonce {String} 
     * @param senderId {String} 
     * @param shipmentProfileId {String} 
     * @param signature {String} 
     * @param startTimestamp {String} 
     * @param stopTimestamp {String} 
     * @param temperatureData {String} 
     * @param timingError {Boolean} 
     * @param trackingId {String} 
     */
    constructor(alertOccurred, batteryData, batteryLow, commissioningTime, firmwareVersionMajor, firmwareVersionMinor, firstMeasurement, hardwareError, lastMeasurement, loggerExpired, macAddress, memoryFull, nonce, senderId, shipmentProfileId, signature, startTimestamp, stopTimestamp, temperatureData, timingError, trackingId) { 
        
        ReadoutRequest.initialize(this, alertOccurred, batteryData, batteryLow, commissioningTime, firmwareVersionMajor, firmwareVersionMinor, firstMeasurement, hardwareError, lastMeasurement, loggerExpired, macAddress, memoryFull, nonce, senderId, shipmentProfileId, signature, startTimestamp, stopTimestamp, temperatureData, timingError, trackingId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alertOccurred, batteryData, batteryLow, commissioningTime, firmwareVersionMajor, firmwareVersionMinor, firstMeasurement, hardwareError, lastMeasurement, loggerExpired, macAddress, memoryFull, nonce, senderId, shipmentProfileId, signature, startTimestamp, stopTimestamp, temperatureData, timingError, trackingId) { 
        obj['alert_occurred'] = alertOccurred;
        obj['battery_data'] = batteryData;
        obj['battery_low'] = batteryLow;
        obj['commissioning_time'] = commissioningTime;
        obj['firmware_version_major'] = firmwareVersionMajor;
        obj['firmware_version_minor'] = firmwareVersionMinor;
        obj['first_measurement'] = firstMeasurement;
        obj['hardware_error'] = hardwareError;
        obj['last_measurement'] = lastMeasurement;
        obj['logger_expired'] = loggerExpired;
        obj['mac_address'] = macAddress;
        obj['memory_full'] = memoryFull;
        obj['nonce'] = nonce;
        obj['sender_id'] = senderId;
        obj['shipment_profile_id'] = shipmentProfileId;
        obj['signature'] = signature;
        obj['start_timestamp'] = startTimestamp;
        obj['stop_timestamp'] = stopTimestamp;
        obj['temperature_data'] = temperatureData;
        obj['timing_error'] = timingError;
        obj['tracking_id'] = trackingId;
    }

    /**
     * Constructs a <code>ReadoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReadoutRequest} obj Optional instance to populate.
     * @return {module:model/ReadoutRequest} The populated <code>ReadoutRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReadoutRequest();

            if (data.hasOwnProperty('alert_occurred')) {
                obj['alert_occurred'] = ApiClient.convertToType(data['alert_occurred'], 'Boolean');
            }
            if (data.hasOwnProperty('battery_data')) {
                obj['battery_data'] = ApiClient.convertToType(data['battery_data'], 'String');
            }
            if (data.hasOwnProperty('battery_low')) {
                obj['battery_low'] = ApiClient.convertToType(data['battery_low'], 'Boolean');
            }
            if (data.hasOwnProperty('commissioning_time')) {
                obj['commissioning_time'] = ApiClient.convertToType(data['commissioning_time'], 'String');
            }
            if (data.hasOwnProperty('firmware_version_major')) {
                obj['firmware_version_major'] = ApiClient.convertToType(data['firmware_version_major'], 'Number');
            }
            if (data.hasOwnProperty('firmware_version_minor')) {
                obj['firmware_version_minor'] = ApiClient.convertToType(data['firmware_version_minor'], 'Number');
            }
            if (data.hasOwnProperty('first_measurement')) {
                obj['first_measurement'] = ApiClient.convertToType(data['first_measurement'], 'String');
            }
            if (data.hasOwnProperty('hardware_error')) {
                obj['hardware_error'] = ApiClient.convertToType(data['hardware_error'], 'Boolean');
            }
            if (data.hasOwnProperty('last_measurement')) {
                obj['last_measurement'] = ApiClient.convertToType(data['last_measurement'], 'String');
            }
            if (data.hasOwnProperty('logger_expired')) {
                obj['logger_expired'] = ApiClient.convertToType(data['logger_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('mac_address')) {
                obj['mac_address'] = ApiClient.convertToType(data['mac_address'], 'String');
            }
            if (data.hasOwnProperty('memory_full')) {
                obj['memory_full'] = ApiClient.convertToType(data['memory_full'], 'Boolean');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'String');
            }
            if (data.hasOwnProperty('shipment_profile_id')) {
                obj['shipment_profile_id'] = ApiClient.convertToType(data['shipment_profile_id'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('start_timestamp')) {
                obj['start_timestamp'] = ApiClient.convertToType(data['start_timestamp'], 'String');
            }
            if (data.hasOwnProperty('stop_timestamp')) {
                obj['stop_timestamp'] = ApiClient.convertToType(data['stop_timestamp'], 'String');
            }
            if (data.hasOwnProperty('temperature_data')) {
                obj['temperature_data'] = ApiClient.convertToType(data['temperature_data'], 'String');
            }
            if (data.hasOwnProperty('timing_error')) {
                obj['timing_error'] = ApiClient.convertToType(data['timing_error'], 'Boolean');
            }
            if (data.hasOwnProperty('tracking_id')) {
                obj['tracking_id'] = ApiClient.convertToType(data['tracking_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} alert_occurred
 */
ReadoutRequest.prototype['alert_occurred'] = undefined;

/**
 * @member {String} battery_data
 */
ReadoutRequest.prototype['battery_data'] = undefined;

/**
 * @member {Boolean} battery_low
 */
ReadoutRequest.prototype['battery_low'] = undefined;

/**
 * @member {String} commissioning_time
 */
ReadoutRequest.prototype['commissioning_time'] = undefined;

/**
 * @member {Number} firmware_version_major
 */
ReadoutRequest.prototype['firmware_version_major'] = undefined;

/**
 * @member {Number} firmware_version_minor
 */
ReadoutRequest.prototype['firmware_version_minor'] = undefined;

/**
 * @member {String} first_measurement
 */
ReadoutRequest.prototype['first_measurement'] = undefined;

/**
 * @member {Boolean} hardware_error
 */
ReadoutRequest.prototype['hardware_error'] = undefined;

/**
 * @member {String} last_measurement
 */
ReadoutRequest.prototype['last_measurement'] = undefined;

/**
 * @member {Boolean} logger_expired
 */
ReadoutRequest.prototype['logger_expired'] = undefined;

/**
 * @member {String} mac_address
 */
ReadoutRequest.prototype['mac_address'] = undefined;

/**
 * @member {Boolean} memory_full
 */
ReadoutRequest.prototype['memory_full'] = undefined;

/**
 * @member {String} nonce
 */
ReadoutRequest.prototype['nonce'] = undefined;

/**
 * @member {String} sender_id
 */
ReadoutRequest.prototype['sender_id'] = undefined;

/**
 * @member {String} shipment_profile_id
 */
ReadoutRequest.prototype['shipment_profile_id'] = undefined;

/**
 * @member {String} signature
 */
ReadoutRequest.prototype['signature'] = undefined;

/**
 * @member {String} start_timestamp
 */
ReadoutRequest.prototype['start_timestamp'] = undefined;

/**
 * @member {String} stop_timestamp
 */
ReadoutRequest.prototype['stop_timestamp'] = undefined;

/**
 * @member {String} temperature_data
 */
ReadoutRequest.prototype['temperature_data'] = undefined;

/**
 * @member {Boolean} timing_error
 */
ReadoutRequest.prototype['timing_error'] = undefined;

/**
 * @member {String} tracking_id
 */
ReadoutRequest.prototype['tracking_id'] = undefined;






export default ReadoutRequest;

