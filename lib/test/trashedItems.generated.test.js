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
import { uploadNewFile } from './commons.generated.js';
export const client = getDefaultClient();
test('testListTrashedItems', function testListTrashedItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        yield client.files.deleteFileById(file.id);
        const trashedItems = yield client.trashedItems.getTrashedItems();
        if (!(trashedItems.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=trashedItems.generated.test.js.map