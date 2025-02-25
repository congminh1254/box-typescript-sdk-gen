var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { createNewFolder } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', function testCreateUpdateGetDeleteRetentionPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const description = getUuid();
        const retentionPolicy = yield client.retentionPolicies.createRetentionPolicy({
            policyName: getUuid(),
            policyType: 'finite',
            dispositionAction: 'remove_retention',
            retentionLength: '1',
            description: description,
            canOwnerExtendRetention: false,
            retentionType: 'modifiable',
        });
        if (!(retentionPolicy.description == description)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicy.canOwnerExtendRetention == false)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(retentionPolicy.retentionType) == 'modifiable')) {
            throw new Error('Assertion failed');
        }
        const folder = yield createNewFolder();
        const retentionPolicyAssignment = yield client.retentionPolicyAssignments.createRetentionPolicyAssignment({
            policyId: retentionPolicy.id,
            assignTo: {
                id: folder.id,
                type: 'folder',
            },
        });
        if (!(retentionPolicyAssignment.retentionPolicy.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicyAssignment.assignedTo.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(retentionPolicyAssignment.assignedTo.type) ==
            toString(folder.type))) {
            throw new Error('Assertion failed');
        }
        const files = yield client.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: {
                    id: folder.id,
                },
            },
            file: generateByteStream(10),
        });
        const file = files.entries[0];
        const newFiles = yield client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: file.name,
            },
            file: generateByteStream(20),
        });
        const newFile = newFiles.entries[0];
        if (!(newFile.id == file.id)) {
            throw new Error('Assertion failed');
        }
        const fileVersionRetentions = yield client.fileVersionRetentions.getFileVersionRetentions();
        const fileVersionRetentionsCount = fileVersionRetentions.entries.length;
        if (!(fileVersionRetentionsCount >= 0)) {
            throw new Error('Assertion failed');
        }
        if (fileVersionRetentionsCount == 0) {
            yield client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
            yield client.folders.deleteFolderById(folder.id, {
                queryParams: { recursive: true },
            });
            return void 0;
        }
        const fileVersionRetention = fileVersionRetentions.entries[0];
        const fileVersionRetentionById = yield client.fileVersionRetentions.getFileVersionRetentionById(fileVersionRetention.id);
        if (!(fileVersionRetentionById.id == fileVersionRetention.id)) {
            throw new Error('Assertion failed');
        }
        yield client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
        yield client.folders.deleteFolderById(folder.id, {
            queryParams: { recursive: true },
        });
    });
});
//# sourceMappingURL=fileVersionRetentions.generated.test.js.map