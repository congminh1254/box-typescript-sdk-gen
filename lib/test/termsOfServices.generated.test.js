var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDefaultClient } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testGetTermsOfServices', function testGetTermsOfServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const tos = yield getOrCreateTermsOfServices();
        const updatedTos1 = yield client.termsOfServices.updateTermsOfServiceById(tos.id, {
            status: 'disabled',
            text: 'TOS',
        });
        if (!(toString(updatedTos1.status) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTos1.text == 'TOS')) {
            throw new Error('Assertion failed');
        }
        const updatedTos2 = yield client.termsOfServices.updateTermsOfServiceById(tos.id, {
            status: 'disabled',
            text: 'Updated TOS',
        });
        if (!(toString(updatedTos2.status) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTos2.text == 'Updated TOS')) {
            throw new Error('Assertion failed');
        }
        const listTos = yield client.termsOfServices.getTermsOfService();
        if (!(listTos.totalCount > 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=termsOfServices.generated.test.js.map