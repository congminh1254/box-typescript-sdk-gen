var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testZipDownload', function testZipDownload() {
    return __awaiter(this, void 0, void 0, function* () {
        const file1 = yield uploadNewFile();
        const file2 = yield uploadNewFile();
        const folder1 = yield createNewFolder();
        const zipStream = yield client.zipDownloads.downloadZip({
            items: [
                {
                    id: file1.id,
                    type: 'file',
                },
                {
                    id: file2.id,
                    type: 'file',
                },
                {
                    id: folder1.id,
                    type: 'folder',
                },
            ],
            downloadFileName: 'zip',
        });
        if (!(bufferEquals(yield readByteStream(zipStream), generateByteBuffer(10)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(file1.id);
        yield client.files.deleteFileById(file2.id);
        yield client.folders.deleteFolderById(folder1.id);
    });
});
test('testManualZipDownloadAndCheckStatus', function testManualZipDownloadAndCheckStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        const file1 = yield uploadNewFile();
        const file2 = yield uploadNewFile();
        const folder1 = yield createNewFolder();
        const zipDownload = yield client.zipDownloads.createZipDownload({
            items: [
                {
                    id: file1.id,
                    type: 'file',
                },
                {
                    id: file2.id,
                    type: 'file',
                },
                {
                    id: folder1.id,
                    type: 'folder',
                },
            ],
            downloadFileName: 'zip',
        });
        if (!!(zipDownload.downloadUrl == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(zipDownload.statusUrl == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(dateTimeToString(zipDownload.expiresAt) == '')) {
            throw new Error('Assertion failed');
        }
        const zipStream = yield client.zipDownloads.getZipDownloadContent(zipDownload.downloadUrl);
        if (!(bufferEquals(yield readByteStream(zipStream), generateByteBuffer(10)) ==
            false)) {
            throw new Error('Assertion failed');
        }
        const zipDownloadStatus = yield client.zipDownloads.getZipDownloadStatus(zipDownload.statusUrl);
        if (!(zipDownloadStatus.totalFileCount == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(zipDownloadStatus.downloadedFileCount == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(zipDownloadStatus.skippedFileCount == 0)) {
            throw new Error('Assertion failed');
        }
        if (!(zipDownloadStatus.skippedFolderCount == 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(toString(zipDownloadStatus.state) == 'failed')) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(file1.id);
        yield client.files.deleteFileById(file2.id);
        yield client.folders.deleteFolderById(folder1.id);
    });
});
//# sourceMappingURL=zipDownloads.generated.test.js.map