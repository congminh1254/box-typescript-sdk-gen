# FolderMetadataManager


- [List metadata instances on folder](#list-metadata-instances-on-folder)
- [Get metadata instance on folder](#get-metadata-instance-on-folder)
- [Create metadata instance on folder](#create-metadata-instance-on-folder)
- [Remove metadata instance from folder](#remove-metadata-instance-from-folder)

## List metadata instances on folder

Retrieves all metadata for a given folder. This can not be used on the root
folder with ID `0`.

This operation is performed by calling function `getFolderMetadata`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata/).

*Currently we don't have an example for calling `getFolderMetadata` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- headers `GetFolderMetadataHeadersArg`
  - Headers of getFolderMetadata method


### Returns

This function returns a value of type `Metadatas`.

Returns all the metadata associated with a folder.

This API does not support pagination and will therefore always return
all of the metadata associated to the folder.


## Get metadata instance on folder

Retrieves the instance of a metadata template that has been applied to a
folder. This can not be used on the root folder with ID `0`.

This operation is performed by calling function `getFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata-id-id/).

*Currently we don't have an example for calling `getFolderMetadataById` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `GetFolderMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `GetFolderMetadataByIdHeadersArg`
  - Headers of getFolderMetadataById method


### Returns

This function returns a value of type `Metadata`.

An instance of the metadata template that includes
additional "key:value" pairs defined by the user or
an application.


## Create metadata instance on folder

Applies an instance of a metadata template to a folder.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

To display the metadata template in the Box web app the enterprise needs to be
configured to enable **Cascading Folder Level Metadata** for the user in the
admin console.

This operation is performed by calling function `createFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-folders-id-metadata-id-id/).

*Currently we don't have an example for calling `createFolderMetadataById` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `CreateFolderMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- requestBody `CreateFolderMetadataByIdRequestBodyArg`
  - Request body of createFolderMetadataById method
- headers `CreateFolderMetadataByIdHeadersArg`
  - Headers of createFolderMetadataById method


### Returns

This function returns a value of type `Metadata`.

Returns the instance of the template that was applied to the folder,
including the data that was applied to the template.


## Remove metadata instance from folder

Deletes a piece of folder metadata.

This operation is performed by calling function `deleteFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-folders-id-metadata-id-id/).

*Currently we don't have an example for calling `deleteFolderMetadataById` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `DeleteFolderMetadataByIdScopeArg`
  - The scope of the metadata template Example: "global"
- templateKey `string`
  - The name of the metadata template Example: "properties"
- headers `DeleteFolderMetadataByIdHeadersArg`
  - Headers of deleteFolderMetadataById method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata is
successfully deleted.

