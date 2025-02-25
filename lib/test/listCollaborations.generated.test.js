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
import { createNewFolder } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testListCollaborations', function testListCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const folder = yield createNewFolder();
        const file = yield uploadNewFile();
        const group = yield client.groups.createGroup({
            name: getUuid(),
        });
        const groupCollaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'group',
                id: group.id,
            },
            role: 'editor',
        });
        const fileCollaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'file',
                id: file.id,
            },
            accessibleBy: {
                type: 'user',
                id: getEnvVar('USER_ID'),
            },
            role: 'editor',
        });
        if (!(toString(groupCollaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(groupCollaboration.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        const fileCollaborations = yield client.listCollaborations.getFileCollaborations(file.id);
        if (!(fileCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const folderCollaborations = yield client.listCollaborations.getFolderCollaborations(folder.id);
        if (!(folderCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const pendingCollaborations = yield client.listCollaborations.getCollaborations({
            status: 'pending',
        });
        if (!(pendingCollaborations.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const groupCollaborations = yield client.listCollaborations.getGroupCollaborations(group.id);
        if (!(groupCollaborations.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield client.userCollaborations.deleteCollaborationById(groupCollaboration.id);
        yield client.files.deleteFileById(file.id);
        yield client.folders.deleteFolderById(folder.id);
        yield client.groups.deleteGroupById(group.id);
    });
});
//# sourceMappingURL=listCollaborations.generated.test.js.map