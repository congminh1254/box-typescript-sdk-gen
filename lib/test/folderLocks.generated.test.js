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
import { createNewFolder } from './commons.generated.js';
export const client = getDefaultClient();
test('testFolderLocks', function testFolderLocks() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield createNewFolder();
        const folderLocks = yield client.folderLocks.getFolderLocks({
            folderId: folder.id,
        });
        if (!(folderLocks.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const folderLock = yield client.folderLocks.createFolderLock({
            folder: {
                id: folder.id,
                type: 'folder',
            },
            lockedOperations: {
                move: true,
                delete: true,
            },
        });
        if (!(folderLock.folder.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(folderLock.lockedOperations.move == true)) {
            throw new Error('Assertion failed');
        }
        if (!(folderLock.lockedOperations.delete == true)) {
            throw new Error('Assertion failed');
        }
        yield client.folderLocks.deleteFolderLockById(folderLock.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.folderLocks.deleteFolderLockById(folderLock.id);
        })).rejects.toThrow();
        const newFolderLocks = yield client.folderLocks.getFolderLocks({
            folderId: folder.id,
        });
        if (!(newFolderLocks.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderLocks.generated.test.js.map