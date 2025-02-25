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
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteLegalHoldPolicy', function testCreateUpdateGetDeleteLegalHoldPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = getUuid();
        const legalHoldDescription = 'test description';
        const legalHoldPolicy = yield client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: true,
        });
        if (!(legalHoldPolicy.policyName == legalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicy.description == legalHoldDescription)) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicyId = legalHoldPolicy.id;
        const legalHoldPolicyById = yield client.legalHoldPolicies.getLegalHoldPolicyById(legalHoldPolicyId);
        if (!(legalHoldPolicyById.id == legalHoldPolicyId)) {
            throw new Error('Assertion failed');
        }
        const legalHoldPolicies = yield client.legalHoldPolicies.getLegalHoldPolicies();
        if (!(legalHoldPolicies.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const updatedLegalHoldPolicyName = getUuid();
        const updatedLegalHoldPolicy = yield client.legalHoldPolicies.updateLegalHoldPolicyById(legalHoldPolicyId, {
            requestBody: {
                policyName: updatedLegalHoldPolicyName,
            },
        });
        if (!(updatedLegalHoldPolicy.policyName == updatedLegalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        yield client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
    });
});
test('testCreateNotOngoingLegalHoldPolicy', function testCreateNotOngoingLegalHoldPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const legalHoldPolicyName = getUuid();
        const legalHoldDescription = 'test description';
        const filterStartedAt = dateTimeFromString('2021-01-01T00:00:00-08:00');
        const filterEndedAt = dateTimeFromString('2022-01-01T00:00:00-08:00');
        const legalHoldPolicy = yield client.legalHoldPolicies.createLegalHoldPolicy({
            policyName: legalHoldPolicyName,
            description: legalHoldDescription,
            isOngoing: false,
            filterStartedAt: filterStartedAt,
            filterEndedAt: filterEndedAt,
        });
        if (!(legalHoldPolicy.policyName == legalHoldPolicyName)) {
            throw new Error('Assertion failed');
        }
        if (!(legalHoldPolicy.description == legalHoldDescription)) {
            throw new Error('Assertion failed');
        }
        if (!(dateTimeToString(legalHoldPolicy.filterStartedAt) ==
            dateTimeToString(filterStartedAt))) {
            throw new Error('Assertion failed');
        }
        if (!(dateTimeToString(legalHoldPolicy.filterEndedAt) ==
            dateTimeToString(filterEndedAt))) {
            throw new Error('Assertion failed');
        }
        yield client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicy.id);
    });
});
//# sourceMappingURL=legalHoldPolicies.generated.test.js.map