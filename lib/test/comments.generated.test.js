var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testComments', function testComments() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 256;
        const fileName = getUuid();
        const fileByteStream = generateByteStream(fileSize);
        const parentId = '0';
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: {
                    id: parentId,
                },
            },
            file: fileByteStream,
        });
        const fileId = uploadedFiles.entries[0].id;
        const comments = yield client.comments.getFileComments(fileId);
        if (!(comments.totalCount == 0)) {
            throw new Error('Assertion failed');
        }
        const message = 'Hello there!';
        const newComment = yield client.comments.createComment({
            message: message,
            item: {
                id: fileId,
                type: 'file',
            },
        });
        if (!(newComment.message == message)) {
            throw new Error('Assertion failed');
        }
        if (!(newComment.isReplyComment == false)) {
            throw new Error('Assertion failed');
        }
        if (!(newComment.item.id == fileId)) {
            throw new Error('Assertion failed');
        }
        const newReplyComment = yield client.comments.createComment({
            message: message,
            item: {
                id: newComment.id,
                type: 'comment',
            },
        });
        if (!(newReplyComment.message == message)) {
            throw new Error('Assertion failed');
        }
        if (!(newReplyComment.isReplyComment == true)) {
            throw new Error('Assertion failed');
        }
        const newMessage = 'Hi!';
        yield client.comments.updateCommentById(newReplyComment.id, {
            requestBody: { message: newMessage },
        });
        const newComments = yield client.comments.getFileComments(fileId);
        if (!(newComments.totalCount == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(newComments.entries[1].message == newMessage)) {
            throw new Error('Assertion failed');
        }
        const receivedComment = yield client.comments.getCommentById(newComment.id);
        if (!(receivedComment.message == newComment.message)) {
            throw new Error('Assertion failed');
        }
        yield client.comments.deleteCommentById(newComment.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.comments.getCommentById(newComment.id);
        })).rejects.toThrow();
        yield client.files.deleteFileById(fileId);
    });
});
//# sourceMappingURL=comments.generated.test.js.map