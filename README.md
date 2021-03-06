# modum_mo_dsense_api

ModumMoDsenseApi - JavaScript client for modum_mo_dsense_api
Allows you to interact with the modum system
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 4.3.2
- Package version: 4.3.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://support.modum.io/](https://support.modum.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install modum_mo_dsense_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your modum_mo_dsense_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ModumMoDsenseApi = require('modum_mo_dsense_api');


var api = new ModumMoDsenseApi.AccountApi()
var activateAccountRequest = new ModumMoDsenseApi.ActivateAccountRequest(); // {ActivateAccountRequest} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateAccount(activateAccountRequest, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.trial.modum.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ModumMoDsenseApi.AccountApi* | [**activateAccount**](docs/AccountApi.md#activateAccount) | **POST** /auth/activate | Activate new user account
*ModumMoDsenseApi.AccountApi* | [**initializeReset**](docs/AccountApi.md#initializeReset) | **PUT** /auth/reset | Initialize password reset
*ModumMoDsenseApi.AccountApi* | [**login**](docs/AccountApi.md#login) | **POST** /auth/login | Log in
*ModumMoDsenseApi.AccountApi* | [**refresh**](docs/AccountApi.md#refresh) | **POST** /auth/refresh | Refresh authentication token
*ModumMoDsenseApi.AccountApi* | [**resetPassword**](docs/AccountApi.md#resetPassword) | **POST** /auth/reset | Reset password
*ModumMoDsenseApi.CompanyAdminApi* | [**createField**](docs/CompanyAdminApi.md#createField) | **POST** /fields | Create a custom field
*ModumMoDsenseApi.CompanyAdminApi* | [**gatewaysGet**](docs/CompanyAdminApi.md#gatewaysGet) | **GET** /gateways | Get list of gateway installation in company
*ModumMoDsenseApi.CompanyAdminApi* | [**listFields**](docs/CompanyAdminApi.md#listFields) | **GET** /fields | List custom fields
*ModumMoDsenseApi.CompanyAdminApi* | [**updateField**](docs/CompanyAdminApi.md#updateField) | **PUT** /fields/{fieldId} | Update a custom field
*ModumMoDsenseApi.ComplianceReasonsApi* | [**complianceReasonsGet**](docs/ComplianceReasonsApi.md#complianceReasonsGet) | **GET** /compliance-reasons | List of company defined compliance reasons
*ModumMoDsenseApi.ComplianceReasonsApi* | [**complianceReasonsIdGet**](docs/ComplianceReasonsApi.md#complianceReasonsIdGet) | **GET** /compliance-reasons/{id} | Get a single compliance reason
*ModumMoDsenseApi.ComplianceReasonsApi* | [**complianceReasonsIdPut**](docs/ComplianceReasonsApi.md#complianceReasonsIdPut) | **PUT** /compliance-reasons/{id} | Update a compliance reason
*ModumMoDsenseApi.ComplianceReasonsApi* | [**complianceReasonsPost**](docs/ComplianceReasonsApi.md#complianceReasonsPost) | **POST** /compliance-reasons | Add compliance reason
*ModumMoDsenseApi.GatewayApi* | [**getGatewayShipmentStatus**](docs/GatewayApi.md#getGatewayShipmentStatus) | **POST** /gateway/shipments/status | Get status of shipments
*ModumMoDsenseApi.NotificationApi* | [**createEmailNotification**](docs/NotificationApi.md#createEmailNotification) | **POST** /notifications/email | Create an email notification setting
*ModumMoDsenseApi.NotificationApi* | [**createSMSNotification**](docs/NotificationApi.md#createSMSNotification) | **POST** /notifications/sms | Create an SMS notification setting
*ModumMoDsenseApi.NotificationApi* | [**deleteEmailNotification**](docs/NotificationApi.md#deleteEmailNotification) | **DELETE** /notifications/email | Delete an email notification setting
*ModumMoDsenseApi.NotificationApi* | [**deleteSMSNotification**](docs/NotificationApi.md#deleteSMSNotification) | **DELETE** /notifications/sms | Delete an SMS notification setting
*ModumMoDsenseApi.NotificationApi* | [**getNotifications**](docs/NotificationApi.md#getNotifications) | **GET** /notifications | Get notification settings
*ModumMoDsenseApi.RoleApi* | [**createRole**](docs/RoleApi.md#createRole) | **POST** /roles | Create role
*ModumMoDsenseApi.RoleApi* | [**deleteRole**](docs/RoleApi.md#deleteRole) | **DELETE** /roles/{roleId} | Delete role
*ModumMoDsenseApi.RoleApi* | [**listRoles**](docs/RoleApi.md#listRoles) | **GET** /roles | List existing roles
*ModumMoDsenseApi.RoleApi* | [**updateRole**](docs/RoleApi.md#updateRole) | **PUT** /roles/{roleId} | Add permissions to a role
*ModumMoDsenseApi.ShipmentApi* | [**acknowledgeError**](docs/ShipmentApi.md#acknowledgeError) | **POST** /shipments/{shipmentId}/acknowledge-error | Acknowledge an erroneous shipment
*ModumMoDsenseApi.ShipmentApi* | [**acknowledgeMissing**](docs/ShipmentApi.md#acknowledgeMissing) | **POST** /shipments/{shipmentId}/acknowledge-missing | Acknowledge a missing shipment
*ModumMoDsenseApi.ShipmentApi* | [**addComment**](docs/ShipmentApi.md#addComment) | **POST** /shipments/{shipmentId}/comment | Add a comment
*ModumMoDsenseApi.ShipmentApi* | [**addFields**](docs/ShipmentApi.md#addFields) | **POST** /shipments/{shipmentId}/fields | Add values for custom fields
*ModumMoDsenseApi.ShipmentApi* | [**createProfile**](docs/ShipmentApi.md#createProfile) | **POST** /profiles | Create a shipment profile
*ModumMoDsenseApi.ShipmentApi* | [**deleteProfile**](docs/ShipmentApi.md#deleteProfile) | **DELETE** /profiles/{group_id} | Delete a shipment profile
*ModumMoDsenseApi.ShipmentApi* | [**generateCSV**](docs/ShipmentApi.md#generateCSV) | **POST** /shipments/csv | Generate shipment report(s) in csv format
*ModumMoDsenseApi.ShipmentApi* | [**generatePDF**](docs/ShipmentApi.md#generatePDF) | **POST** /shipments/pdf | Generate shipment report(s) in pdf format
*ModumMoDsenseApi.ShipmentApi* | [**generateXLSX**](docs/ShipmentApi.md#generateXLSX) | **POST** /shipments/xlsx | Generate shipment report(s) in xlsx format
*ModumMoDsenseApi.ShipmentApi* | [**getAlarms**](docs/ShipmentApi.md#getAlarms) | **GET** /alarms | Get a list of alarms triggered for the user
*ModumMoDsenseApi.ShipmentApi* | [**getEvents**](docs/ShipmentApi.md#getEvents) | **GET** /shipments/{shipmentId}/events | Get shipment change &amp; comments log
*ModumMoDsenseApi.ShipmentApi* | [**getGatewaySessions**](docs/ShipmentApi.md#getGatewaySessions) | **GET** /shipments/{shipmentId}/gw-sessions | Get time intervals where a shipment was close to a gateway.
*ModumMoDsenseApi.ShipmentApi* | [**getLoggerDataByNonce**](docs/ShipmentApi.md#getLoggerDataByNonce) | **GET** /logger/{shipmentNonceHex} | Get logger data (temperature data) for shipment
*ModumMoDsenseApi.ShipmentApi* | [**getProfiles**](docs/ShipmentApi.md#getProfiles) | **GET** /profiles | Get shipment profiles
*ModumMoDsenseApi.ShipmentApi* | [**getShipmentByID**](docs/ShipmentApi.md#getShipmentByID) | **GET** /shipments/{shipmentId} | Get shipment by ID
*ModumMoDsenseApi.ShipmentApi* | [**getShipmentStatus**](docs/ShipmentApi.md#getShipmentStatus) | **POST** /shipments/status | Get status of shipments
*ModumMoDsenseApi.ShipmentApi* | [**getShipments**](docs/ShipmentApi.md#getShipments) | **GET** /shipments | Get shipments
*ModumMoDsenseApi.ShipmentApi* | [**getShipmentsOverview**](docs/ShipmentApi.md#getShipmentsOverview) | **GET** /shipments/overview | Get a shipment overview
*ModumMoDsenseApi.ShipmentApi* | [**putShipments**](docs/ShipmentApi.md#putShipments) | **PUT** /shipments | Stop a shipment
*ModumMoDsenseApi.ShipmentApi* | [**setCompliant**](docs/ShipmentApi.md#setCompliant) | **POST** /shipments/{shipmentId}/compliant | Set state to compliant
*ModumMoDsenseApi.ShipmentApi* | [**setNonCompliant**](docs/ShipmentApi.md#setNonCompliant) | **POST** /shipments/{shipmentId}/noncompliant | Set state to non-compliant
*ModumMoDsenseApi.ShipmentApi* | [**startShipment**](docs/ShipmentApi.md#startShipment) | **POST** /shipments | Start a shipment
*ModumMoDsenseApi.ShipmentApi* | [**updateProfile**](docs/ShipmentApi.md#updateProfile) | **PUT** /profiles/{group_id} | Create new version of shipment profile
*ModumMoDsenseApi.SystemApi* | [**version**](docs/SystemApi.md#version) | **GET** /version | Version
*ModumMoDsenseApi.UserApi* | [**changeRoleOfUser**](docs/UserApi.md#changeRoleOfUser) | **PUT** /users/{userId} | Change role of user
*ModumMoDsenseApi.UserApi* | [**getOwnUser**](docs/UserApi.md#getOwnUser) | **GET** /user | Get own user
*ModumMoDsenseApi.UserApi* | [**inviteUser**](docs/UserApi.md#inviteUser) | **POST** /users | Invite user
*ModumMoDsenseApi.UserApi* | [**listUsers**](docs/UserApi.md#listUsers) | **GET** /users | List users
*ModumMoDsenseApi.UserApi* | [**reactivateUser**](docs/UserApi.md#reactivateUser) | **POST** /users/{userId}/reactivate | Reactivate a user
*ModumMoDsenseApi.UserApi* | [**removeUser**](docs/UserApi.md#removeUser) | **DELETE** /users/{userId} | Deactivate user account
*ModumMoDsenseApi.UserApi* | [**requestPinChange**](docs/UserApi.md#requestPinChange) | **POST** /users/verification | Request Verification PIN Change
*ModumMoDsenseApi.UserApi* | [**setVerificationPin**](docs/UserApi.md#setVerificationPin) | **PUT** /users/verification | Set Verification PIN
*ModumMoDsenseApi.UserApi* | [**updateOwnUser**](docs/UserApi.md#updateOwnUser) | **PUT** /users | Update own user account


## Documentation for Models

 - [ModumMoDsenseApi.AcknowledgeErrorRequest](docs/AcknowledgeErrorRequest.md)
 - [ModumMoDsenseApi.AcknowledgeMissingRequest](docs/AcknowledgeMissingRequest.md)
 - [ModumMoDsenseApi.ActivateAccountRequest](docs/ActivateAccountRequest.md)
 - [ModumMoDsenseApi.AddCommentRequest](docs/AddCommentRequest.md)
 - [ModumMoDsenseApi.AddFieldsRequest](docs/AddFieldsRequest.md)
 - [ModumMoDsenseApi.Auth](docs/Auth.md)
 - [ModumMoDsenseApi.ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [ModumMoDsenseApi.ChangeRoleOfUserRequest](docs/ChangeRoleOfUserRequest.md)
 - [ModumMoDsenseApi.ComplianceReason](docs/ComplianceReason.md)
 - [ModumMoDsenseApi.CreateFieldRequest](docs/CreateFieldRequest.md)
 - [ModumMoDsenseApi.Error](docs/Error.md)
 - [ModumMoDsenseApi.GatewayInstallation](docs/GatewayInstallation.md)
 - [ModumMoDsenseApi.InitializeResetRequest](docs/InitializeResetRequest.md)
 - [ModumMoDsenseApi.InlineObject](docs/InlineObject.md)
 - [ModumMoDsenseApi.InlineObject1](docs/InlineObject1.md)
 - [ModumMoDsenseApi.InlineObject2](docs/InlineObject2.md)
 - [ModumMoDsenseApi.InlineResponse200](docs/InlineResponse200.md)
 - [ModumMoDsenseApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [ModumMoDsenseApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [ModumMoDsenseApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [ModumMoDsenseApi.InlineResponse400](docs/InlineResponse400.md)
 - [ModumMoDsenseApi.InlineResponse403](docs/InlineResponse403.md)
 - [ModumMoDsenseApi.InlineResponse404](docs/InlineResponse404.md)
 - [ModumMoDsenseApi.InviteUserRequest](docs/InviteUserRequest.md)
 - [ModumMoDsenseApi.Language](docs/Language.md)
 - [ModumMoDsenseApi.NotificationRequest](docs/NotificationRequest.md)
 - [ModumMoDsenseApi.Permission](docs/Permission.md)
 - [ModumMoDsenseApi.Profile](docs/Profile.md)
 - [ModumMoDsenseApi.PutShipmentsRequest](docs/PutShipmentsRequest.md)
 - [ModumMoDsenseApi.ReadoutRequest](docs/ReadoutRequest.md)
 - [ModumMoDsenseApi.ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [ModumMoDsenseApi.Role](docs/Role.md)
 - [ModumMoDsenseApi.SetCompliantRequest](docs/SetCompliantRequest.md)
 - [ModumMoDsenseApi.SetNonCompliantRequest](docs/SetNonCompliantRequest.md)
 - [ModumMoDsenseApi.ShipmentsShipmentIdEventsNotifications](docs/ShipmentsShipmentIdEventsNotifications.md)
 - [ModumMoDsenseApi.StartShipmentRequest](docs/StartShipmentRequest.md)
 - [ModumMoDsenseApi.State](docs/State.md)
 - [ModumMoDsenseApi.UpdateFieldRequest](docs/UpdateFieldRequest.md)
 - [ModumMoDsenseApi.UpdateownUserRequest](docs/UpdateownUserRequest.md)
 - [ModumMoDsenseApi.User](docs/User.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)

