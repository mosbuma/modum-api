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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ModumMoDsenseApi);
  }
}(this, function(expect, ModumMoDsenseApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ModumMoDsenseApi.StartShipmentRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StartShipmentRequest', function() {
    it('should create an instance of StartShipmentRequest', function() {
      // uncomment below and update the code to test StartShipmentRequest
      //var instane = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be.a(ModumMoDsenseApi.StartShipmentRequest);
    });

    it('should have the property trackingId (base name: "tracking_id")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property startTimestamp (base name: "start_timestamp")', function() {
      // uncomment below and update the code to test the property startTimestamp
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property commissioningTime (base name: "commissioning_time")', function() {
      // uncomment below and update the code to test the property commissioningTime
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipmentProfileId (base name: "shipment_profile_id")', function() {
      // uncomment below and update the code to test the property shipmentProfileId
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "mac_address")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property firmwareVersionMajor (base name: "firmware_version_major")', function() {
      // uncomment below and update the code to test the property firmwareVersionMajor
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property firmwareVersionMinor (base name: "firmware_version_minor")', function() {
      // uncomment below and update the code to test the property firmwareVersionMinor
      //var instance = new ModumMoDsenseApi.StartShipmentRequest();
      //expect(instance).to.be();
    });

  });

}));
