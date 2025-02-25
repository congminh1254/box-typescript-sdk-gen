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
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollaborationAllowlistExemptTargets', function testCollaborationAllowlistExemptTargets() {
    return __awaiter(this, void 0, void 0, function* () {
        const exemptTargets = yield client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
        if (!(exemptTargets.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const user = yield client.users.createUser({
            name: getUuid(),
            login: ''.concat(getUuid(), '@boxdemo.com'),
            isPlatformAccessOnly: true,
        });
        const newExemptTarget = yield client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget({
            user: {
                id: user.id,
            },
        });
        if (!(toString(newExemptTarget.type) ==
            'collaboration_whitelist_exempt_target')) {
            throw new Error('Assertion failed');
        }
        if (!(newExemptTarget.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        const exemptTarget = yield client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(newExemptTarget.id);
        if (!(exemptTarget.id == newExemptTarget.id)) {
            throw new Error('Assertion failed');
        }
        if (!(exemptTarget.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        yield client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(exemptTarget.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(exemptTarget.id);
        })).rejects.toThrow();
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.test.js.map