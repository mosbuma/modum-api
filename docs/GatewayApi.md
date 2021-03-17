# ModumMoDsenseApi.GatewayApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGatewayShipmentStatus**](GatewayApi.md#getGatewayShipmentStatus) | **POST** /gateway/shipments/status | Get status of shipments



## getGatewayShipmentStatus

> [InlineResponse200] getGatewayShipmentStatus(opts)

Get status of shipments

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.GatewayApi();
let opts = {
  'inlineObject': [new ModumMoDsenseApi.InlineObject()] // [InlineObject] | 
};
apiInstance.getGatewayShipmentStatus(opts, (error, data, response) => {
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

