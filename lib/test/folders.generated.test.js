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
test('test_get_folder_info', function test_get_folder_info() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield client.folders.getFolderById('0');
        if (!(rootFolder.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(rootFolder.name == 'All Files')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(rootFolder.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_get_folder_full_info_with_extra_fields', function test_get_folder_full_info_with_extra_fields() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield client.folders.getFolderById('0', {
            queryParams: {
                fields: ['has_collaborations', 'tags'],
            },
        });
        if (!(rootFolder.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(rootFolder.hasCollaborations == false)) {
            throw new Error('Assertion failed');
        }
        const tagsLength = rootFolder.tags.length;
        if (!(tagsLength == 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_and_delete_folder', function test_create_and_delete_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = getUuid();
        const newFolder = yield client.folders.createFolder({
            name: newFolderName,
            parent: { id: '0' },
        });
        const createdFolder = yield client.folders.getFolderById(newFolder.id);
        if (!(createdFolder.name == newFolderName)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(newFolder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.folders.getFolderById(newFolder.id);
        })).rejects.toThrow();
    });
});
test('test_update_folder', function test_update_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderToUpdateName = getUuid();
        const folderToUpdate = yield client.folders.createFolder({
            name: folderToUpdateName,
            parent: { id: '0' },
        });
        const updatedName = getUuid();
        const updatedFolder = yield client.folders.updateFolderById(folderToUpdate.id, {
            requestBody: {
                name: updatedName,
                description: 'Updated description',
            },
        });
        if (!(updatedFolder.name == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedFolder.description == 'Updated description')) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(updatedFolder.id);
    });
});
test('test_copy_move_folder_and_list_folder_items', function test_copy_move_folder_and_list_folder_items() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderOriginName = getUuid();
        const folderOrigin = yield client.folders.createFolder({
            name: folderOriginName,
            parent: { id: '0' },
        });
        const copiedFolderName = getUuid();
        const copiedFolder = yield client.folders.copyFolder(folderOrigin.id, {
            parent: { id: '0' },
            name: copiedFolderName,
        });
        if (!(copiedFolder.parent.id == '0')) {
            throw new Error('Assertion failed');
        }
        const movedFolderName = getUuid();
        const movedFolder = yield client.folders.updateFolderById(copiedFolder.id, {
            requestBody: {
                parent: {
                    id: folderOrigin.id,
                },
                name: movedFolderName,
            },
        });
        if (!(movedFolder.parent.id == folderOrigin.id)) {
            throw new Error('Assertion failed');
        }
        const folderItems = yield client.folders.getFolderItems(folderOrigin.id);
        if (!(folderItems.entries[0].id == movedFolder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(folderItems.entries[0].name == movedFolderName)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(movedFolder.id);
        yield client.folders.deleteFolderById(folderOrigin.id);
    });
});
//# sourceMappingURL=folders.generated.test.js.map