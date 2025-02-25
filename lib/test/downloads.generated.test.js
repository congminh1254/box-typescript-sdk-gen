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
import { generateByteBuffer } from '../internal/utils.js';
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
export const client = getDefaultClient();
test('test_download_file', function test_download_file() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const fileBuffer = generateByteBuffer(1024 * 1024);
        const fileContentStream = generateByteStreamFromBuffer(fileBuffer);
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        const downloadedFileContent = yield client.downloads.downloadFile(uploadedFile.id);
        if (!bufferEquals(yield readByteStream(downloadedFileContent), fileBuffer)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(uploadedFile.id);
    });
});
test('test_get_download_url', function test_get_download_url() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFile = yield uploadNewFile();
        const downloadUrl = yield client.downloads.getDownloadFileUrl(uploadedFile.id);
        if (!!(downloadUrl == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!downloadUrl.includes('https://')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(uploadedFile.id);
    });
});
test('test_change_download_url_with_interceptor', function test_change_download_url_with_interceptor() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = getUuid();
        const fileBuffer = generateByteBuffer(1024 * 1024);
        const fileContentStream = generateByteStreamFromBuffer(fileBuffer);
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        const uploadedFile = uploadedFiles.entries[0];
        const downloadedFileContent = yield client.downloads.downloadFile(uploadedFile.id);
        if (!bufferEquals(yield readByteStream(downloadedFileContent), fileBuffer)) {
            throw new Error('Assertion failed');
        }
        function emptyBeforeRequest(optionsInput) {
            const options = new FetchOptions({
                url: optionsInput.url,
                method: optionsInput.method,
                params: optionsInput.params,
                headers: optionsInput.headers,
                data: optionsInput.data,
                fileStream: optionsInput.fileStream,
                multipartData: optionsInput.multipartData,
                contentType: optionsInput.contentType,
                responseFormat: optionsInput.responseFormat,
                auth: optionsInput.auth,
                networkSession: optionsInput.networkSession,
                cancellationToken: optionsInput.cancellationToken,
                followRedirects: optionsInput.followRedirects,
            });
            return options;
        }
        function afterRequest(response) {
            return {
                url: response.url,
                status: response.status,
                data: response.data,
                content: response.content,
                headers: Object.assign(Object.assign({}, response.headers), { ['location']: 'fake_location' }),
            };
        }
        const clientWithInterceptor = client.withInterceptors([
            {
                beforeRequest: emptyBeforeRequest,
                afterRequest: afterRequest,
            },
        ]);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield clientWithInterceptor.downloads.downloadFile(uploadedFile.id);
        })).rejects.toThrow();
        yield client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=downloads.generated.test.js.map