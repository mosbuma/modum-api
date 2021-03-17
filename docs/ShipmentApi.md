# ModumMoDsenseApi.ShipmentApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeError**](ShipmentApi.md#acknowledgeError) | **POST** /shipments/{shipmentId}/acknowledge-error | Acknowledge an erroneous shipment
[**acknowledgeMissing**](ShipmentApi.md#acknowledgeMissing) | **POST** /shipments/{shipmentId}/acknowledge-missing | Acknowledge a missing shipment
[**addComment**](ShipmentApi.md#addComment) | **POST** /shipments/{shipmentId}/comment | Add a comment
[**addFields**](ShipmentApi.md#addFields) | **POST** /shipments/{shipmentId}/fields | Add values for custom fields
[**createProfile**](ShipmentApi.md#createProfile) | **POST** /profiles | Create a shipment profile
[**deleteProfile**](ShipmentApi.md#deleteProfile) | **DELETE** /profiles/{group_id} | Delete a shipment profile
[**generateCSV**](ShipmentApi.md#generateCSV) | **POST** /shipments/csv | Generate shipment report(s) in csv format
[**generatePDF**](ShipmentApi.md#generatePDF) | **POST** /shipments/pdf | Generate shipment report(s) in pdf format
[**generateXLSX**](ShipmentApi.md#generateXLSX) | **POST** /shipments/xlsx | Generate shipment report(s) in xlsx format
[**getAlarms**](ShipmentApi.md#getAlarms) | **GET** /alarms | Get a list of alarms triggered for the user
[**getEvents**](ShipmentApi.md#getEvents) | **GET** /shipments/{shipmentId}/events | Get shipment change &amp; comments log
[**getGatewaySessions**](ShipmentApi.md#getGatewaySessions) | **GET** /shipments/{shipmentId}/gw-sessions | Get time intervals where a shipment was close to a gateway.
[**getLoggerDataByNonce**](ShipmentApi.md#getLoggerDataByNonce) | **GET** /logger/{shipmentNonceHex} | Get logger data (temperature data) for shipment
[**getProfiles**](ShipmentApi.md#getProfiles) | **GET** /profiles | Get shipment profiles
[**getShipmentByID**](ShipmentApi.md#getShipmentByID) | **GET** /shipments/{shipmentId} | Get shipment by ID
[**getShipmentStatus**](ShipmentApi.md#getShipmentStatus) | **POST** /shipments/status | Get status of shipments
[**getShipments**](ShipmentApi.md#getShipments) | **GET** /shipments | Get shipments
[**getShipmentsOverview**](ShipmentApi.md#getShipmentsOverview) | **GET** /shipments/overview | Get a shipment overview
[**putShipments**](ShipmentApi.md#putShipments) | **PUT** /shipments | Stop a shipment
[**setCompliant**](ShipmentApi.md#setCompliant) | **POST** /shipments/{shipmentId}/compliant | Set state to compliant
[**setNonCompliant**](ShipmentApi.md#setNonCompliant) | **POST** /shipments/{shipmentId}/noncompliant | Set state to non-compliant
[**startShipment**](ShipmentApi.md#startShipment) | **POST** /shipments | Start a shipment
[**updateProfile**](ShipmentApi.md#updateProfile) | **PUT** /profiles/{group_id} | Create new version of shipment profile



## acknowledgeError

> Object acknowledgeError(shipmentId, acknowledgeErrorRequest)

Acknowledge an erroneous shipment

Set shipment status to erroneous acknowledged if its current status is erroneous. Requires the HANDLE_SHIPMENTS permission.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let acknowledgeErrorRequest = {"comment":"This is fine."}; // AcknowledgeErrorRequest | 
apiInstance.acknowledgeError(shipmentId, acknowledgeErrorRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **acknowledgeErrorRequest** | [**AcknowledgeErrorRequest**](AcknowledgeErrorRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## acknowledgeMissing

> Object acknowledgeMissing(shipmentId, acknowledgeMissingRequest)

Acknowledge a missing shipment

Set shipment status to missing data acknowledged if its current status is missing. Requires the HANDLE_SHIPMENTS permission.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let acknowledgeMissingRequest = {"comment":"This is fine."}; // AcknowledgeMissingRequest | 
apiInstance.acknowledgeMissing(shipmentId, acknowledgeMissingRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **acknowledgeMissingRequest** | [**AcknowledgeMissingRequest**](AcknowledgeMissingRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addComment

> Object addComment(shipmentId, addCommentRequest)

Add a comment

Add a comment to a shipment. Requires the ADD_COMMENTS permission.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let addCommentRequest = {"comment":"This is fine."}; // AddCommentRequest | 
apiInstance.addComment(shipmentId, addCommentRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **addCommentRequest** | [**AddCommentRequest**](AddCommentRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addFields

> Object addFields(shipmentId, addFieldsRequest)

Add values for custom fields

Update shipment with the given custom field values.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let addFieldsRequest = {"locationID":"blöd21","gdpVehicle":false,"date":"2020-03-11","dayTemp":22.5}; // AddFieldsRequest | 
apiInstance.addFields(shipmentId, addFieldsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **addFieldsRequest** | [**AddFieldsRequest**](AddFieldsRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProfile

> Profile createProfile(profile)

Create a shipment profile

Create a new shipment profile. Shipment profile contains settings used when starting loggers, such as the recording interval, as well as the alarm criteria.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let profile = {"name":"Ambient","recording_interval":60,"recording_delay":0,"expected_shipment_duration":14400,"minimum_temperature":1500,"maximum_temperature":2500,"absolute_minimum_temperature":1000,"absolute_maximum_temperature":2600,"deviation_permissible_duration":60,"deviation_reset_time":60,"average_last_n_temperatures":0,"show_alert_on_logger":true,"show_alert_on_mobile":true}; // Profile | 
apiInstance.createProfile(profile, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProfile

> Object deleteProfile(groupId)

Delete a shipment profile

Soft delete / deactivate a shipment profile. The profile is still accessible in the list of profiles.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let groupId = null; // String | 
apiInstance.deleteProfile(groupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**String**](.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateCSV

> generateCSV(opts)

Generate shipment report(s) in csv format

Generate shipment reports for one or more shipments in csv format

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new ModumMoDsenseApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.generateCSV(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePDF

> generatePDF()

Generate shipment report(s) in pdf format

Generater shipment reports for one or more shipments in pdf format

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
apiInstance.generatePDF((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateXLSX

> generateXLSX()

Generate shipment report(s) in xlsx format

Generater shipment reports for one or more shipments in xlxs format

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
apiInstance.generateXLSX((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAlarms

> [InlineResponse2001] getAlarms()

Get a list of alarms triggered for the user

&lt;p&gt;Get a list of alarms triggered for the user. Alarms can be triggered for readouts, by gateway snapshots and when they are marked missing.&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;FINAL_DATA alarms only show as long as they are in the state EXAMINATION_REQUIRED or ERRONOUS. They disappear once the shipment is marked as COMPLIANT, NON_COMPLIANT or as ERRONEOUS_ACKNOWLEDGED.&lt;/li&gt;   &lt;li&gt;MISSING alarms only show as long as the shipment is MISSING. They disappear once the shipment is marked as MISSING_ACKNOWLEDGED or data is received.&lt;/li&gt;   &lt;li&gt;SNAPSHOT_ALARM only show as long as the shipment is IN_TRANSIT. They disappear once the shipment becomes MISSING or data is received.&lt;/li&gt; &lt;/ul&gt; 

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
apiInstance.getAlarms((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEvents

> [InlineResponse2002] getEvents(contentType, shipmentId)

Get shipment change &amp; comments log

Get events and comments related to the given shipment. These could be system events, such as automatic state changes, user events, such as manual state changes, or gateway events. Sorting is newest first.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let contentType = application/json; // String | 
let shipmentId = "shipmentId_example"; // String | 
apiInstance.getEvents(contentType, shipmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **shipmentId** | **String**|  | 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGatewaySessions

> Object getGatewaySessions(shipmentId)

Get time intervals where a shipment was close to a gateway.

Get all \&quot;sessions\&quot; (from, to) where a shipment was close to a gateway. A session is a continous time (no gap longer than 15 minutes) where a single gateway installation could \&quot;see\&quot; the logger/shipment by means of BLE advertisement packages sent via the snapshot endpoint. The response is sorted by the \&quot;first\&quot; timestamp. Only gateway sessions of shipments in the requester&#39;s company are returned, empty array otherwise or if shipment does not exist.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
apiInstance.getGatewaySessions(shipmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLoggerDataByNonce

> Object getLoggerDataByNonce(contentType, shipmentNonceHex)

Get logger data (temperature data) for shipment

Get all data from the logger for the shipment with the given nonce.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let contentType = application/json; // String | 
let shipmentNonceHex = "shipmentNonceHex_example"; // String | The nonce of the shipment as found in the GET /shipment/{shipmentID} response. Must be encoded in hex
apiInstance.getLoggerDataByNonce(contentType, shipmentNonceHex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **shipmentNonceHex** | **String**| The nonce of the shipment as found in the GET /shipment/{shipmentID} response. Must be encoded in hex | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfiles

> [Profile] getProfiles()

Get shipment profiles

Get the list of shipment profiles. This endpoint returns the newest version of all profiles, including the deactivated ones.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
apiInstance.getProfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Profile]**](Profile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentByID

> getShipmentByID(contentType, shipmentId)

Get shipment by ID

Get shipment information. This also includes the shipment profile information with calculated metrics if the shipment has already been read out.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let contentType = application/json; // String | 
let shipmentId = "shipmentId_example"; // String | 
apiInstance.getShipmentByID(contentType, shipmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 
 **shipmentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentStatus

> [InlineResponse200] getShipmentStatus(opts)

Get status of shipments

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let opts = {
  'inlineObject': [new ModumMoDsenseApi.InlineObject()] // [InlineObject] | 
};
apiInstance.getShipmentStatus(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**[InlineObject]**](InlineObject.md)|  | [optional] 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getShipments

> getShipments(contentType)

Get shipments

Get a list of shipments for the authenticated user&#39;s company. Allows soting and filtering.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let contentType = application/json; // String | 
apiInstance.getShipments(contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentsOverview

> Object getShipmentsOverview(contentType)

Get a shipment overview

Get an overview of the number of shipments in each of the possible states.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let contentType = application/json; // String | 
apiInstance.getShipmentsOverview(contentType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putShipments

> putShipments(putShipmentsRequest)

Stop a shipment

Stop a shipment. If there is an existing shipment, readout data gets associated with it and shipment is set to a corresponding state based on alarm status. If no shipment with the given nonce exists, a new shipment with all data is saved (for cases when the start / readout device was offline at the time the logger was started)

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let putShipmentsRequest = new ModumMoDsenseApi.PutShipmentsRequest(); // PutShipmentsRequest | 
apiInstance.putShipments(putShipmentsRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putShipmentsRequest** | [**PutShipmentsRequest**](PutShipmentsRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCompliant

> Object setCompliant(shipmentId, setCompliantRequest)

Set state to compliant

Set shipment status to compliant if its current status is examination required. Requires the HANDLE_SHIPMENTS permission.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let setCompliantRequest = {"comment":"This is fine."}; // SetCompliantRequest | 
apiInstance.setCompliant(shipmentId, setCompliantRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **setCompliantRequest** | [**SetCompliantRequest**](SetCompliantRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setNonCompliant

> Object setNonCompliant(shipmentId, setNonCompliantRequest)

Set state to non-compliant

Set shipment status to non-compliant if its current status is examination required. Requires the HANDLE_SHIPMENTS permission.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | 
let setNonCompliantRequest = {"comment":"This is not fine."}; // SetNonCompliantRequest | 
apiInstance.setNonCompliant(shipmentId, setNonCompliantRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**|  | 
 **setNonCompliantRequest** | [**SetNonCompliantRequest**](SetNonCompliantRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startShipment

> startShipment(startShipmentRequest)

Start a shipment

Save a new shipment. This endpoint should be called once a logger has been started. It sets shipment state to in transit.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let startShipmentRequest = {"tracking_id":990100000212345700,"start_timestamp":"2018-06-27T13:24:22.405Z","commissioning_time":"2018-06-27T13:24:22.405Z","shipment_profile_id":"{{profileId}}","nonce":"QN+29sz8YWB6Duuh9Lmjzw==","mac_address":"d4:09:70:c9:9c:9e","firmware_version_major":1,"firmware_version_minor":4}; // StartShipmentRequest | 
apiInstance.startShipment(startShipmentRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startShipmentRequest** | [**StartShipmentRequest**](StartShipmentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProfile

> Profile updateProfile(groupId, profile)

Create new version of shipment profile

Deactives the previous shipment profile and adds a new version with sent parameters.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ShipmentApi();
let groupId = null; // String | 
let profile = {"name":"Ambient","recording_interval":60,"recording_delay":0,"expected_shipment_duration":14400,"minimum_temperature":1500,"maximum_temperature":2500,"absolute_minimum_temperature":1000,"absolute_maximum_temperature":2600,"deviation_permissible_duration":60,"deviation_reset_time":60,"average_last_n_temperatures":0,"show_alert_on_logger":true,"show_alert_on_mobile":true}; // Profile | 
apiInstance.updateProfile(groupId, profile, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**String**](.md)|  | 
 **profile** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

