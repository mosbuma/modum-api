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
    instance = new ModumMoDsenseApi.ChangeRoleOfUserRequest();
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

  describe('ChangeRoleOfUserRequest', function() {
    it('should create an instance of ChangeRoleOfUserRequest', function() {
      // uncomment below and update the code to test ChangeRoleOfUserRequest
      //var instane = new ModumMoDsenseApi.ChangeRoleOfUserRequest();
      //expect(instance).to.be.a(ModumMoDsenseApi.ChangeRoleOfUserRequest);
    });

    it('should have the property roleId (base name: "role_id")', function() {
      // uncomment below and update the code to test the property roleId
      //var instance = new ModumMoDsenseApi.ChangeRoleOfUserRequest();
      //expect(instance).to.be();
    });

  });

}));