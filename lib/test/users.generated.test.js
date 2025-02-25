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
import { createNull } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('test_get_users', function test_get_users() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield client.users.getUsers();
        if (!(users.totalCount >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_get_user_me', function test_get_user_me() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUser = yield client.users.getUserMe();
        if (!(toString(currentUser.type) == 'user')) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_update_get_delete_user', function test_create_update_get_delete_user() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = getUuid();
        const userLogin = ''.concat(getUuid(), '@gmail.com');
        const user = yield client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        if (!(user.name == userName)) {
            throw new Error('Assertion failed');
        }
        const userById = yield client.users.getUserById(user.id);
        if (!(userById.id == user.id)) {
            throw new Error('Assertion failed');
        }
        const updatedUserName = getUuid();
        const updatedUser = yield client.users.updateUserById(user.id, {
            requestBody: { name: updatedUserName },
        });
        if (!(updatedUser.name == updatedUserName)) {
            throw new Error('Assertion failed');
        }
        yield client.users.deleteUserById(user.id);
    });
});
test('test_user_notification_email', function test_user_notification_email() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = getUuid();
        const userLogin = ''.concat(getUuid(), '@gmail.com');
        const user = yield client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const updatedWithNotificationEmail = yield client.users.updateUserById(user.id, {
            requestBody: {
                notificationEmail: {
                    email: userLogin,
                },
            },
        });
        if (!!(updatedWithNotificationEmail.notificationEmail == void 0)) {
            throw new Error('Assertion failed');
        }
        const updatedWithoutNotificationEmail = yield client.users.updateUserById(user.id, {
            requestBody: {
                notificationEmail: createNull(),
            },
        });
        if (!(updatedWithoutNotificationEmail.notificationEmail == void 0)) {
            throw new Error('Assertion failed');
        }
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=users.generated.test.js.map