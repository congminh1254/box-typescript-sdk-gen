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
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
export const client = getDefaultClient();
test('testSessionTerminationUser', function testSessionTerminationUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminClient = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const user = yield adminClient.users.getUserMe();
        const result = yield client.sessionTermination.terminateUsersSessions({
            userIds: [getEnvVar('USER_ID')],
            userLogins: [user.login],
        });
        if (!(result.message ==
            'Request is successful, please check the admin events for the status of the job')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testSessionTerminationGroup', function testSessionTerminationGroup() {
    return __awaiter(this, void 0, void 0, function* () {
        const groupName = getUuid();
        const group = yield client.groups.createGroup({
            name: groupName,
        });
        const result = yield client.sessionTermination.terminateGroupsSessions({
            groupIds: [group.id],
        });
        if (!(result.message ==
            'Request is successful, please check the admin events for the status of the job')) {
            throw new Error('Assertion failed');
        }
        yield client.groups.deleteGroupById(group.id);
    });
});
//# sourceMappingURL=sessionTermination.generated.test.js.map