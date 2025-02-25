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
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testUserCollaborations', function testUserCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = getUuid();
        const userLogin = ''.concat(getUuid(), '@gmail.com');
        const user = yield client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const folder = yield createNewFolder();
        const collaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                id: user.id,
            },
            role: 'editor',
        });
        if (!(toString(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const collaborationId = collaboration.id;
        const collaborationFromApi = yield client.userCollaborations.getCollaborationById(collaborationId);
        if (!(collaborationId == collaborationFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(collaborationFromApi.status) == 'accepted')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(collaborationFromApi.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(collaborationFromApi.inviteEmail == void 0)) {
            throw new Error('Assertion failed');
        }
        const updatedCollaboration = yield client.userCollaborations.updateCollaborationById(collaborationId, {
            role: 'viewer',
        });
        if (!(toString(updatedCollaboration.role) == 'viewer')) {
            throw new Error('Assertion failed');
        }
        yield client.userCollaborations.deleteCollaborationById(collaborationId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.userCollaborations.getCollaborationById(collaborationId);
        })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
        yield client.users.deleteUserById(user.id);
    });
});
test('testConvertingUserCollaborationToOwnership', function testConvertingUserCollaborationToOwnership() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = getUuid();
        const userLogin = ''.concat(getUuid(), '@gmail.com');
        const user = yield client.users.createUser({
            name: userName,
            login: userLogin,
            isPlatformAccessOnly: true,
        });
        const folder = yield createNewFolder();
        const collaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                id: user.id,
            },
            role: 'editor',
        });
        if (!(toString(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const ownerCollaboration = yield client.userCollaborations.updateCollaborationById(collaboration.id, {
            role: 'owner',
        });
        if (!(ownerCollaboration == void 0)) {
            throw new Error('Assertion failed');
        }
        const folderCollaborations = yield client.listCollaborations.getFolderCollaborations(folder.id);
        const folderCollaboration = folderCollaborations.entries[0];
        yield client.userCollaborations.deleteCollaborationById(folderCollaboration.id);
        const userClient = client.withAsUserHeader(user.id);
        yield userClient.folders.deleteFolderById(folder.id);
        yield userClient.trashedFolders.deleteTrashedFolderById(folder.id);
        yield client.users.deleteUserById(user.id);
    });
});
test('testExternalUserCollaborations', function testExternalUserCollaborations() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = getUuid();
        const userLogin = ''.concat(getUuid(), '@boxdemo.com');
        const folder = yield createNewFolder();
        const collaboration = yield client.userCollaborations.createCollaboration({
            item: {
                type: 'folder',
                id: folder.id,
            },
            accessibleBy: {
                type: 'user',
                login: userLogin,
            },
            role: 'editor',
        });
        if (!(toString(collaboration.role) == 'editor')) {
            throw new Error('Assertion failed');
        }
        const collaborationId = collaboration.id;
        const collaborationFromApi = yield client.userCollaborations.getCollaborationById(collaborationId);
        if (!(collaborationId == collaborationFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(collaborationFromApi.status) == 'pending')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(collaborationFromApi.type) == 'collaboration')) {
            throw new Error('Assertion failed');
        }
        if (!(collaborationFromApi.inviteEmail == userLogin)) {
            throw new Error('Assertion failed');
        }
        const updatedCollaboration = yield client.userCollaborations.updateCollaborationById(collaborationId, {
            role: 'viewer',
        });
        if (!(toString(updatedCollaboration.role) == 'viewer')) {
            throw new Error('Assertion failed');
        }
        yield client.userCollaborations.deleteCollaborationById(collaborationId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.userCollaborations.getCollaborationById(collaborationId);
        })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=userCollaborations.generated.test.js.map