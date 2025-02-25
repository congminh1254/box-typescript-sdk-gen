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
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testLegalHoldPolicyAssignments', function testLegalHoldPolicyAssignments() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = getUuid();
        const legalHoldDescription = 'test description';
        const legalHoldPolicy = yield client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: true,
        });
        const legalHoldPolicyId = legalHoldPolicy.id;
        const file = yield uploadNewFile();
        const fileId = file.id;
        const legalHoldPolicyAssignment = yield client.legalHoldPolicyAssignments.createLegalHoldPolicyAssignment({
            policyId: legalHoldPolicyId,
            assignTo: {
                type: 'file',
                id: fileId,
            },
        });
        if (!(toString(legalHoldPolicyAssignment.legalHoldPolicy.type) ==
            'legal_hold_policy')) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicyAssignment.assignedTo.id == fileId)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(legalHoldPolicyAssignment.assignedTo.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicyAssignmentId = legalHoldPolicyAssignment.id;
        const legalHoldPolicyAssignmentFromApi = yield client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        if (!(legalHoldPolicyAssignmentFromApi.id == legalHoldPolicyAssignmentId)) {
            throw new Error('Assertion failed');
        }
        const legalPolicyAssignments = yield client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignments({
            policyId: legalHoldPolicyId,
        });
        if (!(legalPolicyAssignments.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const filesOnHold = yield client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId);
        if (!(filesOnHold.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(filesOnHold.entries[0].id == fileId)) {
            throw new Error('Assertion failed');
        }
        yield client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId);
        })).rejects.toThrow();
        yield client.files.deleteFileById(fileId);
        try {
            yield client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
        }
        catch (error) {
            console.log(''.concat('Could not delete Legal Policy with id: ', legalHoldPolicyId));
        }
        finally {
        }
    });
});
//# sourceMappingURL=legalHoldPolicyAssignments.generated.test.js.map