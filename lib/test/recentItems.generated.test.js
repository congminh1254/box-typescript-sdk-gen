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
test('testRecentItems', function testRecentItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const recentItems = yield client.recentItems.getRecentItems();
        if (!(recentItems.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=recentItems.generated.test.js.map