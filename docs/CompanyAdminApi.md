# ModumMoDsenseApi.CompanyAdminApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createField**](CompanyAdminApi.md#createField) | **POST** /fields | Create a custom field
[**gatewaysGet**](CompanyAdminApi.md#gatewaysGet) | **GET** /gateways | Get list of gateway installation in company
[**listFields**](CompanyAdminApi.md#listFields) | **GET** /fields | List custom fields
[**updateField**](CompanyAdminApi.md#updateField) | **PUT** /fields/{fieldId} | Update a custom field



## createField

> createField(createFieldRequest)

Create a custom field

Create a custom field in the company of the authenticated user. This custom field will be then available for all shipments of the company.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.CompanyAdminApi();
let createFieldRequest = {"identifier":"date","type":"date","german":"Touren-Datum","english":"tour date","required":true,"show_in_temperature_graph":false}; // CreateFieldRequest | 
apiInstance.createField(createFieldRequest, (error, data, response) => {
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
 **createFieldRequest** | [**CreateFieldRequest**](CreateFieldRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gatewaysGet

> Object gatewaysGet()

Get list of gateway installation in company

Lists all active gateway installation in the requester&#39;s company

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.CompanyAdminApi();
apiInstance.gatewaysGet((error, data, response) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFields

> listFields(contentType)

List custom fields

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.CompanyAdminApi();
let contentType = application/json; // String | 
apiInstance.listFields(contentType, (error, data, response) => {
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


## updateField

> Object updateField(fieldId, updateFieldRequest)

Update a custom field

Update properties of an existing custom field.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.CompanyAdminApi();
let fieldId = "fieldId_example"; // String | 
let updateFieldRequest = {"active":false,"type":"text","name":"Niederlassungsnummer","required":false,"show_in_temperature_graph":false}; // UpdateFieldRequest | 
apiInstance.updateField(fieldId, updateFieldRequest, (error, data, response) => {
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
 **fieldId** | **String**|  | 
 **updateFieldRequest** | [**UpdateFieldRequest**](UpdateFieldRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

