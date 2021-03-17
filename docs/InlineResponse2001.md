# ModumMoDsenseApi.InlineResponse2001

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**state** | **String** | the state the shipment is currently in | 
**shipmentId** | **String** |  | 
**trackingId** | **String** |  | 
**sendEmail** | **Boolean** | An email was sent for this notification. | 
**sendSms** | **Boolean** | A sms was sent for this notification. If sending fails due to a invalid phone number it would show as false. Note that it could still fail due to various other reasons. | 



## Enum: StateEnum


* `MISSING_DATA` (value: `"MISSING_DATA"`)

* `EXAMINATION_REQUIRED` (value: `"EXAMINATION_REQUIRED"`)

* `ERRONEOUS` (value: `"ERRONEOUS"`)

* `IN_TRANSIT` (value: `"IN_TRANSIT"`)




