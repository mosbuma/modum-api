# ModumMoDsenseApi.InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**type** | **String** |  | 
**eventTime** | **Date** |  | 
**data** | [**OneOfobjectobjectobjectobjectobjectobjectobject**](OneOfobjectobjectobjectobjectobjectobjectobject.md) | additional data relating to the event. format depends on the type of the event. note that MISSING events have data set to null. | [optional] 
**notifications** | [**[ShipmentsShipmentIdEventsNotifications]**](ShipmentsShipmentIdEventsNotifications.md) | all users that were informed about this shipment event | [optional] 



## Enum: TypeEnum


* `TRANSIT` (value: `"TRANSIT"`)

* `FINAL_DATA` (value: `"FINAL_DATA"`)

* `MANUAL_STATE_TRANSITION` (value: `"MANUAL_STATE_TRANSITION"`)

* `COMMENT` (value: `"COMMENT"`)

* `MISSING` (value: `"MISSING"`)

* `SNAPSHOT_ALARM` (value: `"SNAPSHOT_ALARM"`)

* `SWISSPOST` (value: `"SWISSPOST"`)




