var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { hexToBase64 } from '../internal/utils.js';
import { iterateChunks } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { reduceIterator } from '../internal/utils.js';
import { Hash } from '../internal/utils.js';
import { bufferLength } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
export class TestPartAccumulator {
    constructor(fields) {
        this.uploadPartUrl = '';
        this.uploadSessionId = '';
        if (fields.lastIndex !== undefined) {
            this.lastIndex = fields.lastIndex;
        }
        if (fields.parts !== undefined) {
            this.parts = fields.parts;
        }
        if (fields.fileSize !== undefined) {
            this.fileSize = fields.fileSize;
        }
        if (fields.uploadPartUrl !== undefined) {
            this.uploadPartUrl = fields.uploadPartUrl;
        }
        if (fields.uploadSessionId !== undefined) {
            this.uploadSessionId = fields.uploadSessionId;
        }
        if (fields.fileHash !== undefined) {
            this.fileHash = fields.fileHash;
        }
    }
}
function reducerById(accInput, chunk) {
    return __awaiter(this, void 0, void 0, function* () {
        const acc = new TestPartAccumulator({
            lastIndex: accInput.lastIndex,
            parts: accInput.parts,
            fileSize: accInput.fileSize,
            uploadPartUrl: accInput.uploadPartUrl,
            uploadSessionId: accInput.uploadSessionId,
            fileHash: accInput.fileHash,
        });
        const lastIndex = acc.lastIndex;
        const parts = acc.parts;
        const chunkBuffer = yield readByteStream(chunk);
        const hash = new Hash({ algorithm: 'sha1' });
        yield hash.updateHash(chunkBuffer);
        const sha1 = yield hash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const chunkSize = bufferLength(chunkBuffer);
        const bytesStart = lastIndex + 1;
        const bytesEnd = lastIndex + chunkSize;
        const contentRange = ''.concat('bytes ', toString(bytesStart), '-', toString(bytesEnd), '/', toString(acc.fileSize));
        const uploadedPart = yield client.chunkedUploads.uploadFilePart(acc.uploadSessionId, generateByteStreamFromBuffer(chunkBuffer), {
            digest: digest,
            contentRange: contentRange,
        });
        const part = uploadedPart.part;
        const partSha1 = hexToBase64(part.sha1);
        if (!(partSha1 == sha1)) {
            throw new Error('Assertion failed');
        }
        if (!(part.size == chunkSize)) {
            throw new Error('Assertion failed');
        }
        if (!(part.offset == bytesStart)) {
            throw new Error('Assertion failed');
        }
        yield acc.fileHash.updateHash(chunkBuffer);
        return new TestPartAccumulator({
            lastIndex: bytesEnd,
            parts: parts.concat([part]),
            fileSize: acc.fileSize,
            uploadSessionId: acc.uploadSessionId,
            fileHash: acc.fileHash,
        });
    });
}
function reducerByUrl(accInput, chunk) {
    return __awaiter(this, void 0, void 0, function* () {
        const acc = new TestPartAccumulator({
            lastIndex: accInput.lastIndex,
            parts: accInput.parts,
            fileSize: accInput.fileSize,
            uploadPartUrl: accInput.uploadPartUrl,
            uploadSessionId: accInput.uploadSessionId,
            fileHash: accInput.fileHash,
        });
        const lastIndex = acc.lastIndex;
        const parts = acc.parts;
        const chunkBuffer = yield readByteStream(chunk);
        const hash = new Hash({ algorithm: 'sha1' });
        yield hash.updateHash(chunkBuffer);
        const sha1 = yield hash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const chunkSize = bufferLength(chunkBuffer);
        const bytesStart = lastIndex + 1;
        const bytesEnd = lastIndex + chunkSize;
        const contentRange = ''.concat('bytes ', toString(bytesStart), '-', toString(bytesEnd), '/', toString(acc.fileSize));
        const uploadedPart = yield client.chunkedUploads.uploadFilePartByUrl(acc.uploadPartUrl, generateByteStreamFromBuffer(chunkBuffer), {
            digest: digest,
            contentRange: contentRange,
        });
        const part = uploadedPart.part;
        const partSha1 = hexToBase64(part.sha1);
        if (!(partSha1 == sha1)) {
            throw new Error('Assertion failed');
        }
        if (!(part.size == chunkSize)) {
            throw new Error('Assertion failed');
        }
        if (!(part.offset == bytesStart)) {
            throw new Error('Assertion failed');
        }
        yield acc.fileHash.updateHash(chunkBuffer);
        return new TestPartAccumulator({
            lastIndex: bytesEnd,
            parts: parts.concat([part]),
            fileSize: acc.fileSize,
            uploadPartUrl: acc.uploadPartUrl,
            fileHash: acc.fileHash,
        });
    });
}
test('testChunkedManualProcessById', function testChunkedManualProcessById() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 20 * 1024 * 1024;
        const fileByteStream = generateByteStream(fileSize);
        const fileName = getUuid();
        const parentFolderId = '0';
        const uploadSession = yield client.chunkedUploads.createFileUploadSession({
            fileName: fileName,
            fileSize: fileSize,
            folderId: parentFolderId,
        });
        const uploadSessionId = uploadSession.id;
        const partSize = uploadSession.partSize;
        const totalParts = uploadSession.totalParts;
        if (!(partSize * totalParts >= fileSize)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadSession.numPartsProcessed == 0)) {
            throw new Error('Assertion failed');
        }
        const fileHash = new Hash({ algorithm: 'sha1' });
        const chunksIterator = iterateChunks(fileByteStream, partSize, fileSize);
        const results = yield reduceIterator(chunksIterator, reducerById, new TestPartAccumulator({
            lastIndex: -1,
            parts: [],
            fileSize: fileSize,
            uploadSessionId: uploadSessionId,
            fileHash: fileHash,
        }));
        const parts = results.parts;
        const processedSessionParts = yield client.chunkedUploads.getFileUploadSessionParts(uploadSessionId);
        if (!(processedSessionParts.totalCount == totalParts)) {
            throw new Error('Assertion failed');
        }
        const processedSession = yield client.chunkedUploads.getFileUploadSessionById(uploadSessionId);
        if (!(processedSession.id == uploadSessionId)) {
            throw new Error('Assertion failed');
        }
        const sha1 = yield fileHash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const committedSession = yield client.chunkedUploads.createFileUploadSessionCommit(uploadSessionId, { parts: parts }, { digest: digest });
        if (!(committedSession.entries[0].name == fileName)) {
            throw new Error('Assertion failed');
        }
        yield client.chunkedUploads.deleteFileUploadSessionById(uploadSessionId);
    });
});
test('testChunkedManualProcessByUrl', function testChunkedManualProcessByUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 20 * 1024 * 1024;
        const fileByteStream = generateByteStream(fileSize);
        const fileName = getUuid();
        const parentFolderId = '0';
        const uploadSession = yield client.chunkedUploads.createFileUploadSession({
            fileName: fileName,
            fileSize: fileSize,
            folderId: parentFolderId,
        });
        const uploadPartUrl = uploadSession.sessionEndpoints.uploadPart;
        const commitUrl = uploadSession.sessionEndpoints.commit;
        const listPartsUrl = uploadSession.sessionEndpoints.listParts;
        const statusUrl = uploadSession.sessionEndpoints.status;
        const abortUrl = uploadSession.sessionEndpoints.abort;
        const uploadSessionId = uploadSession.id;
        const partSize = uploadSession.partSize;
        const totalParts = uploadSession.totalParts;
        if (!(partSize * totalParts >= fileSize)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadSession.numPartsProcessed == 0)) {
            throw new Error('Assertion failed');
        }
        const fileHash = new Hash({ algorithm: 'sha1' });
        const chunksIterator = iterateChunks(fileByteStream, partSize, fileSize);
        const results = yield reduceIterator(chunksIterator, reducerByUrl, new TestPartAccumulator({
            lastIndex: -1,
            parts: [],
            fileSize: fileSize,
            uploadPartUrl: uploadPartUrl,
            fileHash: fileHash,
        }));
        const parts = results.parts;
        const processedSessionParts = yield client.chunkedUploads.getFileUploadSessionPartsByUrl(listPartsUrl);
        if (!(processedSessionParts.totalCount == totalParts)) {
            throw new Error('Assertion failed');
        }
        const processedSession = yield client.chunkedUploads.getFileUploadSessionByUrl(statusUrl);
        if (!(processedSession.id == uploadSessionId)) {
            throw new Error('Assertion failed');
        }
        const sha1 = yield fileHash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const committedSession = yield client.chunkedUploads.createFileUploadSessionCommitByUrl(commitUrl, { parts: parts }, {
            digest: digest,
        });
        if (!(committedSession.entries[0].name == fileName)) {
            throw new Error('Assertion failed');
        }
        yield client.chunkedUploads.deleteFileUploadSessionByUrl(abortUrl);
    });
});
test('testChunkedUploadConvenienceMethod', function testChunkedUploadConvenienceMethod() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 20 * 1024 * 1024;
        const fileByteStream = generateByteStream(fileSize);
        const fileName = getUuid();
        const parentFolderId = '0';
        const uploadedFile = yield client.chunkedUploads.uploadBigFile(fileByteStream, fileName, fileSize, parentFolderId);
        if (!(uploadedFile.name == fileName)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadedFile.size == fileSize)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadedFile.parent.id == parentFolderId)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=chunkedUploads.generated.test.js.map