var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { BoxClient } from '../client.generated.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const adminUserId = getEnvVar('USER_ID');
export function getOrCreateStoragePolicyAssignment(clientInput, policyId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new BoxClient({
            auth: clientInput.auth,
            networkSession: clientInput.networkSession,
        });
        const storagePolicyAssignments = yield client.storagePolicyAssignments.getStoragePolicyAssignments({
            resolvedForType: 'user',
            resolvedForId: userId,
        });
        if (storagePolicyAssignments.entries.length > 0) {
            if (toString(storagePolicyAssignments.entries[0].assignedTo.type) == 'user') {
                return storagePolicyAssignments.entries[0];
            }
        }
        const storagePolicyAssignment = yield client.storagePolicyAssignments.createStoragePolicyAssignment({
            storagePolicy: new CreateStoragePolicyAssignmentRequestBodyStoragePolicyField({
                id: policyId,
            }),
            assignedTo: {
                id: userId,
                type: 'user',
            },
        });
        return storagePolicyAssignment;
    });
}
test('testGetStoragePolicyAssignments', function testGetStoragePolicyAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(adminUserId);
        const userName = getUuid();
        const newUser = yield client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const storagePolicies = yield client.storagePolicies.getStoragePolicies();
        const storagePolicy1 = storagePolicies.entries[0];
        const storagePolicy2 = storagePolicies.entries[1];
        const storagePolicyAssignment = yield getOrCreateStoragePolicyAssignment(client, storagePolicy1.id, newUser.id);
        if (!(toString(storagePolicyAssignment.type) ==
            'storage_policy_assignment')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(storagePolicyAssignment.assignedTo.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(storagePolicyAssignment.assignedTo.id == newUser.id)) {
            throw new Error('Assertion failed');
        }
        const getStoragePolicyAssignment = yield client.storagePolicyAssignments.getStoragePolicyAssignmentById(storagePolicyAssignment.id);
        if (!(getStoragePolicyAssignment.id == storagePolicyAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const updatedStoragePolicyAssignment = yield client.storagePolicyAssignments.updateStoragePolicyAssignmentById(storagePolicyAssignment.id, {
            storagePolicy: new UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField({
                id: storagePolicy2.id,
            }),
        });
        if (!(updatedStoragePolicyAssignment.storagePolicy.id == storagePolicy2.id)) {
            throw new Error('Assertion failed');
        }
        yield client.storagePolicyAssignments.deleteStoragePolicyAssignmentById(storagePolicyAssignment.id);
        yield client.users.deleteUserById(newUser.id);
    });
});
//# sourceMappingURL=storagePolicicyAssignments.generated.test.js.map