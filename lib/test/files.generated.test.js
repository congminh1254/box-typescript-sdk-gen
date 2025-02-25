var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetFileByIdHeaders } from '../managers/files.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { bufferEquals } from '../internal/utils.js';
import { createNull } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
export function uploadFile(fileName, fileStream) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: fileStream,
        });
        return uploadedFiles.entries[0];
    });
}
test('testGetFileThumbnailUrl', function testGetFileThumbnailUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbnailFileName = getUuid();
        const thumbnailContentStream = generateByteStream(1024 * 1024);
        const thumbnailFile = yield uploadFile(thumbnailFileName, thumbnailContentStream);
        const downloadUrl = yield client.files.getFileThumbnailUrl(thumbnailFile.id, 'png');
        if (!!(downloadUrl == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!downloadUrl.includes('https://')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(thumbnailFile.id);
    });
});
test('testGetFileThumbnail', function testGetFileThumbnail() {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbnailFileName = getUuid();
        const thumbnailContentStream = generateByteStream(1024 * 1024);
        const thumbnailFile = yield uploadFile(thumbnailFileName, thumbnailContentStream);
        const thumbnail = yield client.files.getFileThumbnailById(thumbnailFile.id, 'png');
        if (!!(bufferEquals(yield readByteStream(thumbnail), yield readByteStream(thumbnailContentStream)) == true)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(thumbnailFile.id);
    });
});
test('testGetFileFullExtraFields', function testGetFileFullExtraFields() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const fileStream = generateByteStream(1024 * 1024);
        const uploadedFile = yield uploadFile(newFileName, fileStream);
        const file = yield client.files.getFileById(uploadedFile.id, {
            queryParams: {
                fields: ['is_externally_owned', 'has_collaborations'],
            },
        });
        if (!(file.isExternallyOwned == false)) {
            throw new Error('Assertion failed');
        }
        if (!(file.hasCollaborations == false)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(file.id);
    });
});
test('testCreateGetAndDeleteFile', function testCreateGetAndDeleteFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const updatedContentStream = generateByteStream(1024 * 1024);
        const uploadedFile = yield uploadFile(newFileName, updatedContentStream);
        const file = yield client.files.getFileById(uploadedFile.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.files.getFileById(uploadedFile.id, {
                queryParams: {
                    fields: ['name'],
                },
                headers: new GetFileByIdHeaders({
                    extraHeaders: { ['if-none-match']: file.etag },
                }),
            });
        })).rejects.toThrow();
        if (!(file.name == newFileName)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(uploadedFile.id);
        const trashedFile = yield client.trashedFiles.getTrashedFileById(uploadedFile.id);
        if (!(file.id == trashedFile.id)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testUpdateFile', function testUpdateFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToUpdate = yield uploadNewFile();
        const updatedName = getUuid();
        const updatedFile = yield client.files.updateFileById(fileToUpdate.id, {
            requestBody: {
                name: updatedName,
                description: 'Updated description',
            },
        });
        if (!(updatedFile.name == updatedName)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedFile.description == 'Updated description')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(updatedFile.id);
    });
});
test('testFileLock', function testFileLock() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const fileWithLock = yield client.files.updateFileById(file.id, {
            requestBody: {
                lock: {
                    access: 'lock',
                },
            },
            queryParams: {
                fields: ['lock'],
            },
        });
        if (!!(fileWithLock.lock == void 0)) {
            throw new Error('Assertion failed');
        }
        const fileWithoutLock = yield client.files.updateFileById(file.id, {
            requestBody: { lock: createNull() },
            queryParams: {
                fields: ['lock'],
            },
        });
        if (!(fileWithoutLock.lock == void 0)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(file.id);
    });
});
test('testCopyFile', function testCopyFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileOrigin = yield uploadNewFile();
        const copiedFileName = getUuid();
        const copiedFile = yield client.files.copyFile(fileOrigin.id, {
            parent: { id: '0' },
            name: copiedFileName,
        });
        if (!(copiedFile.parent.id == '0')) {
            throw new Error('Assertion failed');
        }
        if (!(copiedFile.name == copiedFileName)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(fileOrigin.id);
        yield client.files.deleteFileById(copiedFile.id);
    });
});
//# sourceMappingURL=files.generated.test.js.map