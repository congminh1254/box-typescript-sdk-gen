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
test('testTrashedWebLinks', function testTrashedWebLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://www.box.com';
        const parent = yield client.folders.getFolderById('0');
        const name = getUuid();
        const description = 'Weblink description';
        const weblink = yield client.webLinks.createWebLink({
            url: url,
            parent: { id: parent.id },
            name: name,
            description: description,
        });
        yield client.webLinks.deleteWebLinkById(weblink.id);
        const fromTrash = yield client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
        if (!(fromTrash.id == weblink.id)) {
            throw new Error('Assertion failed');
        }
        if (!(fromTrash.name == weblink.name)) {
            throw new Error('Assertion failed');
        }
        const fromApiAfterTrashed = yield client.webLinks.getWebLinkById(weblink.id);
        if (!(toString(fromApiAfterTrashed.itemStatus) == 'trashed')) {
            throw new Error('Assertion failed');
        }
        const restoredWeblink = yield client.trashedWebLinks.restoreWeblinkFromTrash(weblink.id);
        const fromApi = yield client.webLinks.getWebLinkById(weblink.id);
        if (!(restoredWeblink.id == fromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredWeblink.name == fromApi.name)) {
            throw new Error('Assertion failed');
        }
        yield client.webLinks.deleteWebLinkById(weblink.id);
        yield client.trashedWebLinks.deleteTrashedWebLinkById(weblink.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=trashedWebLinks.generated.test.js.map