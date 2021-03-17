# ModumMoDsenseApi.NotificationApi

All URIs are relative to *https://api.trial.modum.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailNotification**](NotificationApi.md#createEmailNotification) | **POST** /notifications/email | Create an email notification setting
[**createSMSNotification**](NotificationApi.md#createSMSNotification) | **POST** /notifications/sms | Create an SMS notification setting
[**deleteEmailNotification**](NotificationApi.md#deleteEmailNotification) | **DELETE** /notifications/email | Delete an email notification setting
[**deleteSMSNotification**](NotificationApi.md#deleteSMSNotification) | **DELETE** /notifications/sms | Delete an SMS notification setting
[**getNotifications**](NotificationApi.md#getNotifications) | **GET** /notifications | Get notification settings



## createEmailNotification

> Object createEmailNotification(notificationRequest)

Create an email notification setting

Add email notification setting for the given user and shipment profile. This will result in the user receiving email notifications whenever an alarm has been triggered for shipments started with the given shipment profile.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.NotificationApi();
let notificationRequest = new ModumMoDsenseApi.NotificationRequest(); // NotificationRequest | 
apiInstance.createEmailNotification(notificationRequest, (error, data, response) => {
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
 **notificationRequest** | [**NotificationRequest**](NotificationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSMSNotification

> Object createSMSNotification(notificationRequest)

Create an SMS notification setting

Add text message notification setting for the given user and shipment profile. This will result in the user receiving text message notifications whenever an alarm has been triggered for shipments started with the given shipment profile. This notification setting can only be activated for users with phone numbers.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.NotificationApi();
let notificationRequest = new ModumMoDsenseApi.NotificationRequest(); // NotificationRequest | 
apiInstance.createSMSNotification(notificationRequest, (error, data, response) => {
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
 **notificationRequest** | [**NotificationRequest**](NotificationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEmailNotification

> Object deleteEmailNotification(notificationRequest)

Delete an email notification setting

Remove email notification setting for the given user and shipment profile. This will result in the user no longer receiving email notifications whenever an alarm has been triggered for shipments started with the given shipment profile.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.NotificationApi();
let notificationRequest = new ModumMoDsenseApi.NotificationRequest(); // NotificationRequest | 
apiInstance.deleteEmailNotification(notificationRequest, (error, data, response) => {
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
 **notificationRequest** | [**NotificationRequest**](NotificationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSMSNotification

> Object deleteSMSNotification(notificationRequest)

Delete an SMS notification setting

Remove text message notification setting for the given user and shipment profile. This will result in the user no longer receiving text message notifications whenever an alarm has been triggered for shipments started with the given shipment profile.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.NotificationApi();
let notificationRequest = new ModumMoDsenseApi.NotificationRequest(); // NotificationRequest | 
apiInstance.deleteSMSNotification(notificationRequest, (error, data, response) => {
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
 **notificationRequest** | [**NotificationRequest**](NotificationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getNotifications

> [InlineResponse2003] getNotifications()

Get notification settings

Get the list of all notification settings for all company&#39;s users and shipment profiles.

### Example

```javascript
import ModumMoDsenseApi from 'modum_mo_dsense_api';
let defaultClient = ModumMoDsenseApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ModumMoDsenseApi.NotificationApi();
apiInstance.getNotifications((error, data, response) => {
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

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

