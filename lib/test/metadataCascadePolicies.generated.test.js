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
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
export const client = getDefaultClient();
test('testMetadataCascadePolicies', function testMetadataCascadePolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const templateKey = ''.concat('key', getUuid());
        yield client.metadataTemplates.createMetadataTemplate({
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
        const folder = yield createNewFolder();
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const cascadePolicy = yield client.metadataCascadePolicies.createMetadataCascadePolicy({
            folderId: folder.id,
            scope: 'enterprise',
            templateKey: templateKey,
        });
        if (!(toString(cascadePolicy.type) == 'metadata_cascade_policy')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(cascadePolicy.ownerEnterprise.type) == 'enterprise')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(cascadePolicy.ownerEnterprise.id) == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(cascadePolicy.parent.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(cascadePolicy.parent.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(cascadePolicy.scope) ==
            ''.concat('enterprise_', enterpriseId))) {
            throw new Error('Assertion failed');
        }
        if (!(cascadePolicy.templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        const cascadePolicyId = cascadePolicy.id;
        const policyFromTheApi = yield client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
        if (!(cascadePolicyId == policyFromTheApi.id)) {
            throw new Error('Assertion failed');
        }
        const policies = yield client.metadataCascadePolicies.getMetadataCascadePolicies({
            folderId: folder.id,
        });
        if (!(policies.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
                conflictResolution: 'overwrite',
            });
        })).rejects.toThrow();
        yield client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
        yield client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
            conflictResolution: 'overwrite',
        });
        yield client.metadataCascadePolicies.deleteMetadataCascadePolicyById(cascadePolicyId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
        })).rejects.toThrow();
        yield client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=metadataCascadePolicies.generated.test.js.map