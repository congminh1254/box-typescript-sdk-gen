var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const userId = getEnvVar('USER_ID');
test('testGetStoragePolicies', function testGetStoragePolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(userId);
        const storagePolicies = yield client.storagePolicies.getStoragePolicies();
        const storagePolicy = storagePolicies.entries[0];
        if (!(toString(storagePolicy.type) == 'storage_policy')) {
            throw new Error('Assertion failed');
        }
        const getStoragePolicy = yield client.storagePolicies.getStoragePolicyById(storagePolicy.id);
        if (!(getStoragePolicy.id == storagePolicy.id)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=storagePolicies.generated.test.js.map