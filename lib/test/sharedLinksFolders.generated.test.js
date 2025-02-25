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
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksFolders', function testSharedLinksFolders() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        yield client.sharedLinksFolders.addShareLinkToFolder(folder.id, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const folderFromApi = yield client.sharedLinksFolders.getSharedLinkForFolder(folder.id, {
            fields: 'shared_link',
        });
        if (!(toString(folderFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = getEnvVar('USER_ID');
        const userClient = getDefaultClientWithUserSubject(userId);
        const folderFromSharedLinkPassword = yield userClient.sharedLinksFolders.findFolderForSharedLink({}, {
            boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(folder.id == folderFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksFolders.findFolderForSharedLink({}, {
                boxapi: ''.concat('shared_link=', folderFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedFolder = yield client.sharedLinksFolders.updateSharedLinkOnFolder(folder.id, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!(toString(updatedFolder.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=sharedLinksFolders.generated.test.js.map