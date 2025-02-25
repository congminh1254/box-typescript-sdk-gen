var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CreateTermsOfServiceStatusForUserRequestBodyTosField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyUserField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
test('testGetTermsOfServiceUserStatuses', function testGetTermsOfServiceUserStatuses() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminUserId = getEnvVar('USER_ID');
        const client = getDefaultClientWithUserSubject(adminUserId);
        const tos = yield getOrCreateTermsOfServices();
        const user = yield client.users.createUser({
            name: getUuid(),
            login: ''.concat(getUuid(), '@boxdemo.com'),
            isPlatformAccessOnly: true,
        });
        const createdTosUserStatus = yield client.termsOfServiceUserStatuses.createTermsOfServiceStatusForUser({
            tos: new CreateTermsOfServiceStatusForUserRequestBodyTosField({
                id: tos.id,
            }),
            user: new CreateTermsOfServiceStatusForUserRequestBodyUserField({
                id: user.id,
            }),
            isAccepted: false,
        });
        if (!(createdTosUserStatus.isAccepted == false)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdTosUserStatus.type) ==
            'terms_of_service_user_status')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdTosUserStatus.tos.type) == 'terms_of_service')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdTosUserStatus.user.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!(createdTosUserStatus.tos.id == tos.id)) {
            throw new Error('Assertion failed');
        }
        if (!(createdTosUserStatus.user.id == user.id)) {
            throw new Error('Assertion failed');
        }
        const updatedTosUserStatus = yield client.termsOfServiceUserStatuses.updateTermsOfServiceStatusForUserById(createdTosUserStatus.id, {
            isAccepted: true,
        });
        if (!(updatedTosUserStatus.isAccepted == true)) {
            throw new Error('Assertion failed');
        }
        const listTosUserStatuses = yield client.termsOfServiceUserStatuses.getTermsOfServiceUserStatuses({
            tosId: tos.id,
            userId: user.id,
        });
        if (!(listTosUserStatuses.totalCount > 0)) {
            throw new Error('Assertion failed');
        }
        yield client.users.deleteUserById(user.id);
    });
});
//# sourceMappingURL=termsOfServiceUserStatuses.generated.test.js.map