# ClassificationsManager


- [List all classifications](#list-all-classifications)
- [Delete all classifications](#delete-all-classifications)
- [Add initial classifications](#add-initial-classifications)

## List all classifications

Retrieves the classification metadata template and lists all the
classifications available to this enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `getMetadataTemplateEnterpriseSecurityClassificationSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema/).

*Currently we don't have an example for calling `getMetadataTemplateEnterpriseSecurityClassificationSchema` in integration tests*

### Arguments

- headers `GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg`
  - Headers of getMetadataTemplateEnterpriseSecurityClassificationSchema method


### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the `securityClassification` metadata template, which contains
a `Box__Security__Classification__Key` field that lists all the
classifications available to this enterprise.


## Delete all classifications

Delete all classifications by deleting the classification
metadata template.

This operation is performed by calling function `deleteMetadataTemplateEnterpriseSecurityClassificationSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema/).

*Currently we don't have an example for calling `deleteMetadataTemplateEnterpriseSecurityClassificationSchema` in integration tests*

### Arguments

- headers `DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg`
  - Headers of deleteMetadataTemplateEnterpriseSecurityClassificationSchema method


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata
template for classifications is successfully deleted.


## Add initial classifications

When an enterprise does not yet have any classifications, this API call
initializes the classification template with an initial set of
classifications.

If an enterprise already has a classification, the template will already
exist and instead an API call should be made to add additional
classifications.

This operation is performed by calling function `createMetadataTemplateSchemaClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-templates-schema-classifications/).

*Currently we don't have an example for calling `createMetadataTemplateSchemaClassification` in integration tests*

### Arguments

- requestBody `CreateMetadataTemplateSchemaClassificationRequestBodyArg`
  - Request body of createMetadataTemplateSchemaClassification method
- headers `CreateMetadataTemplateSchemaClassificationHeadersArg`
  - Headers of createMetadataTemplateSchemaClassification method


### Returns

This function returns a value of type `ClassificationTemplate`.

Returns a new `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.

