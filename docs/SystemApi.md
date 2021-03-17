# ModumMoDsenseApi.SystemApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**version**](SystemApi.md#version) | **GET** /version | Version



## version

> Object version()

Version

Get the current backend version number.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.SystemApi();
apiInstance.version((error, data, response) => {
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

