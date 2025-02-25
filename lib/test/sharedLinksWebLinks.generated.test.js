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
test('testSharedLinksWebLinks', function testSharedLinksWebLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const parent = yield client.folders.getFolderById('0');
        const webLink = yield client.webLinks.createWebLink({
            url: 'https://www.box.com',
            parent: { id: parent.id },
            name: getUuid(),
            description: 'Weblink description',
        });
        const webLinkId = webLink.id;
        yield client.sharedLinksWebLinks.addShareLinkToWebLink(webLinkId, {
            sharedLink: {
                access: 'open',
                password: 'Secret123@',
            },
        }, { fields: 'shared_link' });
        const webLinkFromApi = yield client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
            fields: 'shared_link',
        });
        if (!(toString(webLinkFromApi.sharedLink.access) == 'open')) {
            throw new Error('Assertion failed');
        }
        const userId = getEnvVar('USER_ID');
        const userClient = getDefaultClientWithUserSubject(userId);
        const webLinkFromSharedLinkPassword = yield userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
            boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=Secret123@'),
        });
        if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.sharedLinksWebLinks.findWebLinkForSharedLink({}, {
                boxapi: ''.concat('shared_link=', webLinkFromApi.sharedLink.url, '&shared_link_password=incorrectPassword'),
            });
        })).rejects.toThrow();
        const updatedWebLink = yield client.sharedLinksWebLinks.updateSharedLinkOnWebLink(webLinkId, {
            sharedLink: {
                access: 'collaborators',
            },
        }, { fields: 'shared_link' });
        if (!(toString(updatedWebLink.sharedLink.access) == 'collaborators')) {
            throw new Error('Assertion failed');
        }
        yield client.webLinks.deleteWebLinkById(webLinkId);
    });
});
//# sourceMappingURL=sharedLinksWebLinks.generated.test.js.map