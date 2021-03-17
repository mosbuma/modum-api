# ModumMoDsenseApi.UserApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeRoleOfUser**](UserApi.md#changeRoleOfUser) | **PUT** /users/{userId} | Change role of user
[**getOwnUser**](UserApi.md#getOwnUser) | **GET** /user | Get own user
[**inviteUser**](UserApi.md#inviteUser) | **POST** /users | Invite user
[**listUsers**](UserApi.md#listUsers) | **GET** /users | List users
[**reactivateUser**](UserApi.md#reactivateUser) | **POST** /users/{userId}/reactivate | Reactivate a user
[**removeUser**](UserApi.md#removeUser) | **DELETE** /users/{userId} | Deactivate user account
[**requestPinChange**](UserApi.md#requestPinChange) | **POST** /users/verification | Request Verification PIN Change
[**setVerificationPin**](UserApi.md#setVerificationPin) | **PUT** /users/verification | Set Verification PIN
[**updateOwnUser**](UserApi.md#updateOwnUser) | **PUT** /users | Update own user account



## changeRoleOfUser

> Object changeRoleOfUser(userId, changeRoleOfUserRequest)

Change role of user

Update the role of users in the company. Only a company admin is allowed to update other users. There needs to be at least one Admin per company, so changing the role of the last Admin won&#39;t work.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let userId = "userId_example"; // String | The id of the user for which we want to change the role.
let changeRoleOfUserRequest = {"role_id":"16ebd89f-c980-4722-bda2-c20139b0e887"}; // ChangeRoleOfUserRequest | 
apiInstance.changeRoleOfUser(userId, changeRoleOfUserRequest, (error, data, response) => {
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
 **userId** | **String**| The id of the user for which we want to change the role. | 
 **changeRoleOfUserRequest** | [**ChangeRoleOfUserRequest**](ChangeRoleOfUserRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOwnUser

> Object getOwnUser()

Get own user

Get the logged in user information including company, role and permissions.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
apiInstance.getOwnUser((error, data, response) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inviteUser

> Object inviteUser(inviteUserRequest)

Invite user

Invite a new user to join your modum organization. Only a company admin is allowed to invite new users.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let inviteUserRequest = {"email":"new.user@example.com","first_name":"Max","last_name":"Muster","role_id":"{{roleId}}"}; // InviteUserRequest | New user information
apiInstance.inviteUser(inviteUserRequest, (error, data, response) => {
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
 **inviteUserRequest** | [**InviteUserRequest**](InviteUserRequest.md)| New user information | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listUsers

> [User] listUsers()

List users

Get a list of users in the company of the authenticated user.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
apiInstance.listUsers((error, data, response) => {
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

[**[User]**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reactivateUser

> Object reactivateUser(userId, contentType)

Reactivate a user

Reactivate user account in your company that was previously deactivated. Only company admins can reactivate user accounts.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let userId = "userId_example"; // String | 
let contentType = application/json; // String | 
apiInstance.reactivateUser(userId, contentType, (error, data, response) => {
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
 **userId** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeUser

> removeUser(userId)

Deactivate user account

Remove a user in your company. The user will no longer be allowed to access this company. This action is only possible if the given user is not the last company admin. Only a company admin is allowed to remove users.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let userId = "userId_example"; // String | 
apiInstance.removeUser(userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestPinChange

> Object requestPinChange()

Request Verification PIN Change

Sends an email to change the verification pin

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
apiInstance.requestPinChange((error, data, response) => {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setVerificationPin

> Object setVerificationPin(opts)

Set Verification PIN

Set the verification pin to a new value

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let opts = {
  'inlineObject1': new ModumMoDsenseApi.InlineObject1() // InlineObject1 | 
};
apiInstance.setVerificationPin(opts, (error, data, response) => {
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOwnUser

> Object updateOwnUser(updateownUserRequest)

Update own user account

Update own user account details, such as language, phone number, or name.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.UserApi();
let updateownUserRequest = {"first_name":"Beni","last_name":"Whales","phone":417741642222,"language":"de"}; // UpdateownUserRequest | 
apiInstance.updateOwnUser(updateownUserRequest, (error, data, response) => {
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
 **updateownUserRequest** | [**UpdateownUserRequest**](UpdateownUserRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

