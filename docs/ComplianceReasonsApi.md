# ModumMoDsenseApi.ComplianceReasonsApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complianceReasonsGet**](ComplianceReasonsApi.md#complianceReasonsGet) | **GET** /compliance-reasons | List of company defined compliance reasons
[**complianceReasonsIdGet**](ComplianceReasonsApi.md#complianceReasonsIdGet) | **GET** /compliance-reasons/{id} | Get a single compliance reason
[**complianceReasonsIdPut**](ComplianceReasonsApi.md#complianceReasonsIdPut) | **PUT** /compliance-reasons/{id} | Update a compliance reason
[**complianceReasonsPost**](ComplianceReasonsApi.md#complianceReasonsPost) | **POST** /compliance-reasons | Add compliance reason



## complianceReasonsGet

> [ComplianceReason] complianceReasonsGet()

List of company defined compliance reasons

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ComplianceReasonsApi();
apiInstance.complianceReasonsGet((error, data, response) => {
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

[**[ComplianceReason]**](ComplianceReason.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## complianceReasonsIdGet

> ComplianceReason complianceReasonsIdGet(id)

Get a single compliance reason

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ComplianceReasonsApi();
let id = null; // String | 
apiInstance.complianceReasonsIdGet(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**ComplianceReason**](ComplianceReason.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## complianceReasonsIdPut

> Object complianceReasonsIdPut(id, opts)

Update a compliance reason

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ComplianceReasonsApi();
let id = null; // String | 
let opts = {
  'complianceReason': new ModumMoDsenseApi.ComplianceReason() // ComplianceReason | 
};
apiInstance.complianceReasonsIdPut(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 
 **complianceReason** | [**ComplianceReason**](ComplianceReason.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## complianceReasonsPost

> ComplianceReason complianceReasonsPost(opts)

Add compliance reason

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.ComplianceReasonsApi();
let opts = {
  'UNKNOWN_BASE_TYPE': new ModumMoDsenseApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.complianceReasonsPost(opts, (error, data, response) => {
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**ComplianceReason**](ComplianceReason.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

