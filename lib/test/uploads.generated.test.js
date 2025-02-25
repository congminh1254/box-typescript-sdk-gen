var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UploadFileHeaders } from '../managers/uploads.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { createTokenAndCancelAfter } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testUploadFileAndFileVersion', function testUploadFileAndFileVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const fileContentStream = generateByteStream(1024 * 1024);
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        if (!(uploadedFile.name == newFileName)) {
            throw new Error('Assertion failed');
        }
        const newFileVersionName = getUuid();
        const newFileContentStream = generateByteStream(1024 * 1024);
        const uploadedFilesVersion = yield client.uploads.uploadFileVersion(uploadedFile.id, {
            attributes: {
                name: newFileVersionName,
            },
            file: newFileContentStream,
        });
        const newFileVersion = uploadedFilesVersion.entries[0];
        if (!(newFileVersion.name == newFileVersionName)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(newFileVersion.id);
    });
});
test('testRequestCancellation', function testRequestCancellation() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 1024 * 1024;
        const fileName = getUuid();
        const fileByteStream = generateByteStream(fileSize);
        const cancellationToken = createTokenAndCancelAfter(1);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.uploads.uploadFile({
                attributes: {
                    name: fileName,
                    parent: {
                        id: '0',
                    },
                },
                file: fileByteStream,
            }, {
                queryParams: {},
                headers: new UploadFileHeaders({}),
                cancellationToken: cancellationToken,
            });
        })).rejects.toThrow();
    });
});
test('testPreflightCheck', function testPreflightCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const preflightCheckResult = yield client.uploads.preflightFileUploadCheck({
            name: newFileName,
            size: 1024 * 1024,
            parent: {
                id: '0',
            },
        });
        if (!!(preflightCheckResult.uploadUrl == '')) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=uploads.generated.test.js.map