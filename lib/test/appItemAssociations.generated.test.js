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
test('testListFileAppItemAssocations', function testListFileAppItemAssocations() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const fileId = getEnvVar('APP_ITEM_ASSOCIATION_FILE_ID');
        const fileAppItemAssociations = yield client.appItemAssociations.getFileAppItemAssociations(fileId);
        if (!(fileAppItemAssociations.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const association = fileAppItemAssociations.entries[0];
        if (!!(association.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.appItem.applicationType) == 'hubs')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.appItem.type) == 'app_item')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.item.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        if (!(association.item.id == fileId)) {
            throw new Error('Assertion failed');
        }
        const file = yield client.files.getFileById(fileId, {
            queryParams: {
                fields: ['is_associated_with_app_item'],
            },
        });
        if (!(file.isAssociatedWithAppItem == true)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testListFolderAppItemAssocations', function testListFolderAppItemAssocations() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const folderId = getEnvVar('APP_ITEM_ASSOCIATION_FOLDER_ID');
        const folderAppItemAssociations = yield client.appItemAssociations.getFolderAppItemAssociations(folderId);
        if (!(folderAppItemAssociations.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const association = folderAppItemAssociations.entries[0];
        if (!!(association.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.appItem.applicationType) == 'hubs')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.appItem.type) == 'app_item')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(association.item.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(association.item.id == folderId)) {
            throw new Error('Assertion failed');
        }
        const folder = yield client.folders.getFolderById(folderId, {
            queryParams: {
                fields: ['is_associated_with_app_item'],
            },
        });
        if (!(folder.isAssociatedWithAppItem == true)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=appItemAssociations.generated.test.js.map