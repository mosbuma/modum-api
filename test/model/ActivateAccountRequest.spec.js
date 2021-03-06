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
    instance = new ModumMoDsenseApi.ActivateAccountRequest();
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

  describe('ActivateAccountRequest', function() {
    it('should create an instance of ActivateAccountRequest', function() {
      // uncomment below and update the code to test ActivateAccountRequest
      //var instane = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be.a(ModumMoDsenseApi.ActivateAccountRequest);
    });

    it('should have the property activationToken (base name: "activation_token")', function() {
      // uncomment below and update the code to test the property activationToken
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property eulaVersion (base name: "eula_version")', function() {
      // uncomment below and update the code to test the property eulaVersion
      //var instance = new ModumMoDsenseApi.ActivateAccountRequest();
      //expect(instance).to.be();
    });

  });

}));
