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
test('testTransferUserContent', function testTransferUserContent() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUserName = getUuid();
        const newUser = yield client.users.createUser({
            name: newUserName,
            isPlatformAccessOnly: true,
        });
        const currentUser = yield client.users.getUserMe();
        const transferedFolder = yield client.transfer.transferOwnedFolder(newUser.id, {
            ownedBy: {
                id: currentUser.id,
            },
        }, {
            queryParams: { notify: false },
        });
        if (!(transferedFolder.ownedBy.id == currentUser.id)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(transferedFolder.id, {
            queryParams: { recursive: true },
        });
        yield client.users.deleteUserById(newUser.id, {
            queryParams: {
                notify: false,
                force: true,
            },
        });
    });
});
//# sourceMappingURL=transfer.generated.test.js.map