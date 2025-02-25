var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { decodeBase64ByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testAvatars', function testAvatars() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.getUserMe();
        const createdAvatar = yield client.avatars.createUserAvatar(user.id, {
            pic: decodeBase64ByteStream('iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=='),
            picContentType: 'image/png',
            picFileName: 'avatar.png',
        });
        if (!!(createdAvatar.picUrls.small == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdAvatar.picUrls.large == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdAvatar.picUrls.preview == void 0)) {
            throw new Error('Assertion failed');
        }
        const response = yield client.avatars.getUserAvatar(user.id);
        if (!(bufferEquals(yield readByteStream(response), generateByteBuffer(0)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        yield client.avatars.deleteUserAvatar(user.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.avatars.getUserAvatar(user.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=avatars.generated.test.js.map