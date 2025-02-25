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
import { generateByteStream } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testSharedLinksFiles', function testSharedLinksFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: { id: '0' },
            },
            file: generateByteStream(10),
        });
        const fileId = uploadedFiles.entries[0].id;
        yield client.sharedLinksFiles.addShareLinkToFile(fileId, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const fileFromApi = yield client.sharedLinksFiles.getSharedLinkForFile(fileId, {
            fields: 'shared_link',
        });
        if (!(toString(fileFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = getEnvVar('USER_ID');
        const userClient = getDefaultClientWithUserSubject(userId);
        const fileFromSharedLinkPassword = yield userClient.sharedLinksFiles.findFileForSharedLink({}, {
            boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(fileId == fileFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksFiles.findFileForSharedLink({}, {
                boxapi: ''.concat('shared_link=', fileFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedFile = yield client.sharedLinksFiles.updateSharedLinkOnFile(fileId, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!(toString(updatedFile.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(fileId);
    });
});
//# sourceMappingURL=sharedLinksFiles.generated.test.js.map