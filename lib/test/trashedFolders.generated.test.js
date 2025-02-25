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
export const client = getDefaultClient();
test('testTrashedFolders', function testTrashedFolders() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        yield client.folders.deleteFolderById(folder.id);
        const fromTrash = yield client.trashedFolders.getTrashedFolderById(folder.id);
        if (!(fromTrash.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(fromTrash.name == folder.name)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.folders.getFolderById(folder.id);
        })).rejects.toThrow();
        const restoredFolder = yield client.trashedFolders.restoreFolderFromTrash(folder.id);
        const fromApi = yield client.folders.getFolderById(folder.id);
        if (!(restoredFolder.id == fromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredFolder.name == fromApi.name)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
        yield client.trashedFolders.deleteTrashedFolderById(folder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.trashedFolders.getTrashedFolderById(folder.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=trashedFolders.generated.test.js.map