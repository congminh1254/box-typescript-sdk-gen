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
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testTrashedFiles', function testTrashedFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 1024 * 1024;
        const fileName = getUuid();
        const fileByteStream = generateByteStream(fileSize);
        const files = yield client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: fileByteStream,
        });
        const file = files.entries[0];
        yield client.files.deleteFileById(file.id);
        const fromTrash = yield client.trashedFiles.getTrashedFileById(file.id);
        if (!(fromTrash.id == file.id)) {
            throw new Error('Assertion failed');
        }
        if (!(fromTrash.name == file.name)) {
            throw new Error('Assertion failed');
        }
        const fromApiAfterTrashed = yield client.files.getFileById(file.id);
        if (!(toString(fromApiAfterTrashed.itemStatus) == 'trashed')) {
            throw new Error('Assertion failed');
        }
        const restoredFile = yield client.trashedFiles.restoreFileFromTrash(file.id);
        const fromApiAfterRestore = yield client.files.getFileById(file.id);
        if (!(restoredFile.id == fromApiAfterRestore.id)) {
            throw new Error('Assertion failed');
        }
        if (!(restoredFile.name == fromApiAfterRestore.name)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(fromApiAfterRestore.itemStatus) == 'active')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(file.id);
        yield client.trashedFiles.deleteTrashedFileById(file.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.trashedFiles.getTrashedFileById(file.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=trashedFiles.generated.test.js.map