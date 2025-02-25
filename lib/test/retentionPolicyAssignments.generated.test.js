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
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicyAssignment', function testCreateUpdateGetDeleteRetentionPolicyAssignment() {
    return __awaiter(this, void 0, void 0, function* () {
        const retentionPolicyName = getUuid();
        const retentionDescription = 'test description';
        const retentionPolicy = yield client.retentionPolicies.createRetentionPolicy({
            policyName: retentionPolicyName,
            policyType: 'finite',
            areOwnersNotified: true,
            canOwnerExtendRetention: true,
            description: retentionDescription,
            dispositionAction: 'remove_retention',
            retentionLength: '1',
            retentionType: 'modifiable',
        });
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
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
        const newVersions = yield client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: getUuid(),
            },
            file: generateByteStream(20),
        });
        const newVersion = newVersions.entries[0];
        const retentionPolicyAssignment = yield client.retentionPolicyAssignments.createRetentionPolicyAssignment({
            policyId: retentionPolicy.id,
            assignTo: {
                type: 'folder',
                id: folder.id,
            },
        });
        if (!(retentionPolicyAssignment.retentionPolicy.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicyAssignment.assignedTo.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyAssignmentById = yield client.retentionPolicyAssignments.getRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
        if (!(retentionPolicyAssignmentById.id == retentionPolicyAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyAssignments = yield client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
        if (!(retentionPolicyAssignments.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const filesUnderRetention = yield client.retentionPolicyAssignments.getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignment.id);
        if (!(filesUnderRetention.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        yield client.retentionPolicyAssignments.deleteRetentionPolicyAssignmentById(retentionPolicyAssignment.id);
        const retentionPolicyAssignmentsAfterDelete = yield client.retentionPolicyAssignments.getRetentionPolicyAssignments(retentionPolicy.id);
        if (!(retentionPolicyAssignmentsAfterDelete.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=retentionPolicyAssignments.generated.test.js.map