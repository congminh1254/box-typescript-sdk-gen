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
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', function testCreateUpdateGetDeleteRetentionPolicy() {
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
        if (!(retentionPolicy.policyName == retentionPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicy.description == retentionDescription)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicyById = yield client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
        if (!(retentionPolicyById.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        const retentionPolicies = yield client.retentionPolicies.getRetentionPolicies();
        if (!(retentionPolicies.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const updatedRetentionPolicyName = getUuid();
        const updatedRetentionPolicy = yield client.retentionPolicies.updateRetentionPolicyById(retentionPolicy.id, {
            requestBody: {
                policyName: updatedRetentionPolicyName,
            },
        });
        if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
            throw new Error('Assertion failed');
        }
        yield client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
    });
});
//# sourceMappingURL=retentionPolicies.generated.test.js.map