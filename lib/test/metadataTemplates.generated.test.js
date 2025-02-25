var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
export const client = getDefaultClient();
test('testMetadataTemplates', function testMetadataTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        const templateKey = ''.concat('key', getUuid());
        const template = yield client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'testName',
                    displayName: 'testName',
                },
            ],
        });
        if (!(template.templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(template.displayName == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[0].key == 'testName')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[0].displayName == 'testName')) {
            throw new Error('Assertion failed');
        }
        const updatedTemplate = yield client.metadataTemplates.updateMetadataTemplate('enterprise', templateKey, [
            {
                op: 'addField',
                fieldKey: 'newfieldname',
                data: { ['type']: 'string', ['displayName']: 'newFieldName' },
            },
        ]);
        if (!(updatedTemplate.fields.length == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTemplate.fields[1].key == 'newfieldname')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTemplate.fields[1].displayName == 'newFieldName')) {
            throw new Error('Assertion failed');
        }
        const getMetadataTemplate = yield client.metadataTemplates.getMetadataTemplateById(template.id);
        if (!(getMetadataTemplate.id == template.id)) {
            throw new Error('Assertion failed');
        }
        const getMetadataTemplateSchema = yield client.metadataTemplates.getMetadataTemplate('enterprise', template.templateKey);
        if (!(getMetadataTemplateSchema.id == template.id)) {
            throw new Error('Assertion failed');
        }
        const enterpriseMetadataTemplates = yield client.metadataTemplates.getEnterpriseMetadataTemplates();
        if (!(enterpriseMetadataTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const globalMetadataTemplates = yield client.metadataTemplates.getGlobalMetadataTemplates();
        if (!(globalMetadataTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        })).rejects.toThrow();
    });
});
test('testGetMetadataTemplateByInstance', function testGetMetadataTemplateByInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const templateKey = ''.concat('key', getUuid());
        const template = yield client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'testName',
                    displayName: 'testName',
                },
            ],
        });
        const createdMetadataInstance = yield client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
        const metadataTemplates = yield client.metadataTemplates.getMetadataTemplatesByInstanceId({
            metadataInstanceId: createdMetadataInstance.id,
        });
        if (!(metadataTemplates.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(metadataTemplates.entries[0].displayName == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(metadataTemplates.entries[0].templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        yield client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
        yield client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=metadataTemplates.generated.test.js.map