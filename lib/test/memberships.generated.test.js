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
test('testMemberships', function testMemberships() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.createUser({
            name: getUuid(),
            login: ''.concat(getUuid(), '@boxdemo.com'),
        });
        const userMemberships = yield client.memberships.getUserMemberships(user.id);
        if (!(userMemberships.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const group = yield client.groups.createGroup({
            name: getUuid(),
        });
        const groupMemberships = yield client.memberships.getGroupMemberships(group.id);
        if (!(groupMemberships.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const groupMembership = yield client.memberships.createGroupMembership({
            user: { id: user.id },
            group: {
                id: group.id,
            },
        });
        if (!(groupMembership.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        if (!(groupMembership.group.id == group.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(groupMembership.role) == 'member')) {
            throw new Error('Assertion failed');
        }
        const getGroupMembership = yield client.memberships.getGroupMembershipById(groupMembership.id);
        if (!(getGroupMembership.id == groupMembership.id)) {
            throw new Error('Assertion failed');
        }
        const updatedGroupMembership = yield client.memberships.updateGroupMembershipById(groupMembership.id, {
            requestBody: {
                role: 'admin',
            },
        });
        if (!(updatedGroupMembership.id == groupMembership.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(updatedGroupMembership.role) == 'admin')) {
            throw new Error('Assertion failed');
        }
        yield client.memberships.deleteGroupMembershipById(groupMembership.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.memberships.getGroupMembershipById(groupMembership.id);
        })).rejects.toThrow();
        yield client.groups.deleteGroupById(group.id);
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=memberships.generated.test.js.map