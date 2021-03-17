# ModumMoDsenseApi.AccountApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAccount**](AccountApi.md#activateAccount) | **POST** /auth/activate | Activate new user account
[**initializeReset**](AccountApi.md#initializeReset) | **PUT** /auth/reset | Initialize password reset
[**login**](AccountApi.md#login) | **POST** /auth/login | Log in
[**refresh**](AccountApi.md#refresh) | **POST** /auth/refresh | Refresh authentication token
[**resetPassword**](AccountApi.md#resetPassword) | **POST** /auth/reset | Reset password



## activateAccount

> Object activateAccount(activateAccountRequest)

Activate new user account

Activating an account after an invitation email was received

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.AccountApi();
let activateAccountRequest = new ModumMoDsenseApi.ActivateAccountRequest(); // ActivateAccountRequest | 
apiInstance.activateAccount(activateAccountRequest, (error, data, response) => {
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
 **activateAccountRequest** | [**ActivateAccountRequest**](ActivateAccountRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## initializeReset

> Object initializeReset(initializeResetRequest)

Initialize password reset

Request password reset email

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.AccountApi();
let initializeResetRequest = {"email":"max.muster@example.com"}; // InitializeResetRequest | Email of the user who wants to reset their password
apiInstance.initializeReset(initializeResetRequest, (error, data, response) => {
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
 **initializeResetRequest** | [**InitializeResetRequest**](InitializeResetRequest.md)| Email of the user who wants to reset their password | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## login

> Auth login(inlineObject)

Log in

Log in - get the user information, a JWT token, and a refresh token for the user.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.AccountApi();
let inlineObject = new ModumMoDsenseApi.InlineObject(); // InlineObject | 
apiInstance.login(inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**Auth**](Auth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refresh

> refresh()

Refresh authentication token

Refresh authentication token

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.AccountApi();
apiInstance.refresh((error, data, response) => {
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


## resetPassword

> Object resetPassword(resetPasswordRequest)

Reset password

Set a new password

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';

let apiInstance = new ModumMoDsenseApi.AccountApi();
let resetPasswordRequest = {"reset_token":"{{resetToken}}","password":"Asdf112.!"}; // ResetPasswordRequest | 
apiInstance.resetPassword(resetPasswordRequest, (error, data, response) => {
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
 **resetPasswordRequest** | [**ResetPasswordRequest**](ResetPasswordRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

