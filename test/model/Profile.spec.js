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
    instance = new ModumMoDsenseApi.Profile();
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

  describe('Profile', function() {
    it('should create an instance of Profile', function() {
      // uncomment below and update the code to test Profile
      //var instane = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be.a(ModumMoDsenseApi.Profile);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property recordingInterval (base name: "recording_interval")', function() {
      // uncomment below and update the code to test the property recordingInterval
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property recordingDelay (base name: "recording_delay")', function() {
      // uncomment below and update the code to test the property recordingDelay
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property expectedShipmentDuration (base name: "expected_shipment_duration")', function() {
      // uncomment below and update the code to test the property expectedShipmentDuration
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property minimumTemperature (base name: "minimum_temperature")', function() {
      // uncomment below and update the code to test the property minimumTemperature
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property maximumTemperature (base name: "maximum_temperature")', function() {
      // uncomment below and update the code to test the property maximumTemperature
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property absoluteMinimumTemperature (base name: "absolute_minimum_temperature")', function() {
      // uncomment below and update the code to test the property absoluteMinimumTemperature
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property absoluteMaximumTemperature (base name: "absolute_maximum_temperature")', function() {
      // uncomment below and update the code to test the property absoluteMaximumTemperature
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property deviationPermissibleDuration (base name: "deviation_permissible_duration")', function() {
      // uncomment below and update the code to test the property deviationPermissibleDuration
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property deviationResetTime (base name: "deviation_reset_time")', function() {
      // uncomment below and update the code to test the property deviationResetTime
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property averageLastNTemperatures (base name: "average_last_n_temperatures")', function() {
      // uncomment below and update the code to test the property averageLastNTemperatures
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property showAlertOnLogger (base name: "show_alert_on_logger")', function() {
      // uncomment below and update the code to test the property showAlertOnLogger
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property showAlertOnMobile (base name: "show_alert_on_mobile")', function() {
      // uncomment below and update the code to test the property showAlertOnMobile
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "group_id")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new ModumMoDsenseApi.Profile();
      //expect(instance).to.be();
    });

  });

}));