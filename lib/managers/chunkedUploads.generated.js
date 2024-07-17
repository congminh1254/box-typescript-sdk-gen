"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkedUploadsManager = exports.CreateFileUploadSessionCommitHeaders = exports.GetFileUploadSessionPartsHeaders = exports.DeleteFileUploadSessionByIdHeaders = exports.UploadFilePartHeaders = exports.GetFileUploadSessionByIdHeaders = exports.CreateFileUploadSessionForExistingFileHeaders = exports.CreateFileUploadSessionHeaders = exports.CreateFileUploadSessionCommitOptionals = exports.GetFileUploadSessionPartsOptionals = exports.DeleteFileUploadSessionByIdOptionals = exports.UploadFilePartOptionals = exports.GetFileUploadSessionByIdOptionals = exports.CreateFileUploadSessionForExistingFileOptionals = exports.CreateFileUploadSessionOptionals = void 0;
exports.serializeCreateFileUploadSessionRequestBody = serializeCreateFileUploadSessionRequestBody;
exports.deserializeCreateFileUploadSessionRequestBody = deserializeCreateFileUploadSessionRequestBody;
exports.serializeCreateFileUploadSessionForExistingFileRequestBody = serializeCreateFileUploadSessionForExistingFileRequestBody;
exports.deserializeCreateFileUploadSessionForExistingFileRequestBody = deserializeCreateFileUploadSessionForExistingFileRequestBody;
exports.serializeCreateFileUploadSessionCommitRequestBody = serializeCreateFileUploadSessionCommitRequestBody;
exports.deserializeCreateFileUploadSessionCommitRequestBody = deserializeCreateFileUploadSessionCommitRequestBody;
const uploadSession_generated_js_1 = require("../schemas/uploadSession.generated.js");
const uploadedPart_generated_js_1 = require("../schemas/uploadedPart.generated.js");
const uploadParts_generated_js_1 = require("../schemas/uploadParts.generated.js");
const files_generated_js_1 = require("../schemas/files.generated.js");
const uploadPart_generated_js_1 = require("../schemas/uploadPart.generated.js");
const uploadPart_generated_js_2 = require("../schemas/uploadPart.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const utils_js_7 = require("../internal/utils.js");
const utils_js_8 = require("../internal/utils.js");
const utils_js_9 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class CreateFileUploadSessionOptionals {
    constructor(fields) {
        this.headers = new CreateFileUploadSessionHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionOptionals = CreateFileUploadSessionOptionals;
class CreateFileUploadSessionForExistingFileOptionals {
    constructor(fields) {
        this.headers = new CreateFileUploadSessionForExistingFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionForExistingFileOptionals = CreateFileUploadSessionForExistingFileOptionals;
class GetFileUploadSessionByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileUploadSessionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileUploadSessionByIdOptionals = GetFileUploadSessionByIdOptionals;
class UploadFilePartOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UploadFilePartOptionals = UploadFilePartOptionals;
class DeleteFileUploadSessionByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileUploadSessionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileUploadSessionByIdOptionals = DeleteFileUploadSessionByIdOptionals;
class GetFileUploadSessionPartsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileUploadSessionPartsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileUploadSessionPartsOptionals = GetFileUploadSessionPartsOptionals;
class CreateFileUploadSessionCommitOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionCommitOptionals = CreateFileUploadSessionCommitOptionals;
class CreateFileUploadSessionHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionHeaders = CreateFileUploadSessionHeaders;
class CreateFileUploadSessionForExistingFileHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionForExistingFileHeaders = CreateFileUploadSessionForExistingFileHeaders;
class GetFileUploadSessionByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionByIdHeaders = GetFileUploadSessionByIdHeaders;
class UploadFilePartHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.digest) {
            this.digest = fields.digest;
        }
        if (fields.contentRange) {
            this.contentRange = fields.contentRange;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadFilePartHeaders = UploadFilePartHeaders;
class DeleteFileUploadSessionByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileUploadSessionByIdHeaders = DeleteFileUploadSessionByIdHeaders;
class GetFileUploadSessionPartsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionPartsHeaders = GetFileUploadSessionPartsHeaders;
class CreateFileUploadSessionCommitHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.digest) {
            this.digest = fields.digest;
        }
        if (fields.ifMatch) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.ifNoneMatch) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionCommitHeaders = CreateFileUploadSessionCommitHeaders;
class ChunkedUploadsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    createFileUploadSession(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateFileUploadSessionOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data);
        });
    }
    createFileUploadSessionForExistingFile(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileUploadSessionForExistingFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/upload_sessions'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionForExistingFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data);
        });
    }
    getFileUploadSessionById(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data);
        });
    }
    uploadFilePart(uploadSessionId_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
            const headers = new UploadFilePartHeaders({
                digest: headersInput.digest,
                contentRange: headersInput.contentRange,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new UploadFilePartOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['content-range']: (0, utils_js_2.toString)(headers.contentRange),
            }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)), {
                method: 'PUT',
                headers: headersMap,
                fileStream: requestBody,
                contentType: 'application/octet-stream',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, uploadedPart_generated_js_1.deserializeUploadedPart)(response.data);
        });
    }
    deleteFileUploadSessionById(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new DeleteFileUploadSessionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)), {
                method: 'DELETE',
                headers: headersMap,
                responseFormat: void 0,
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    getFileUploadSessionParts(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionPartsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId), '/parts'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, uploadParts_generated_js_1.deserializeUploadParts)(response.data);
        });
    }
    createFileUploadSessionCommit(uploadSessionId_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
            const headers = new CreateFileUploadSessionCommitHeaders({
                digest: headersInput.digest,
                ifMatch: headersInput.ifMatch,
                ifNoneMatch: headersInput.ifNoneMatch,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new CreateFileUploadSessionCommitOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['if-match']: (0, utils_js_2.toString)(headers.ifMatch),
                ['if-none-match']: (0, utils_js_2.toString)(headers.ifNoneMatch),
            }, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId), '/commit'), {
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, files_generated_js_1.deserializeFiles)(response.data);
        });
    }
    reducer(acc, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastIndex = acc.lastIndex;
            const parts = acc.parts;
            const chunkBuffer = yield (0, utils_js_6.readByteStream)(chunk);
            const hash = new utils_js_8.Hash({ algorithm: 'sha1' });
            hash.updateHash(chunkBuffer);
            const sha1 = yield hash.digestHash('base64');
            const digest = ''.concat('sha=', sha1);
            const chunkSize = (0, utils_js_9.bufferLength)(chunkBuffer);
            const bytesStart = lastIndex + 1;
            const bytesEnd = lastIndex + chunkSize;
            const contentRange = ''.concat('bytes ', (0, utils_js_2.toString)(bytesStart), '-', (0, utils_js_2.toString)(bytesEnd), '/', (0, utils_js_2.toString)(acc.fileSize));
            const uploadedPart = yield this.uploadFilePart(acc.uploadSessionId, (0, utils_js_3.generateByteStreamFromBuffer)(chunkBuffer), {
                digest: digest,
                contentRange: contentRange,
            });
            const part = uploadedPart.part;
            const partSha1 = (0, utils_js_4.hexToBase64)(part.sha1);
            if (!(partSha1 == sha1)) {
                throw new Error('Assertion failed');
            }
            if (!(part.size == chunkSize)) {
                throw new Error('Assertion failed');
            }
            if (!(part.offset == bytesStart)) {
                throw new Error('Assertion failed');
            }
            acc.fileHash.updateHash(chunkBuffer);
            return {
                lastIndex: bytesEnd,
                parts: parts.concat([part]),
                fileSize: acc.fileSize,
                uploadSessionId: acc.uploadSessionId,
                fileHash: acc.fileHash,
            };
        });
    }
    uploadBigFile(file, fileName, fileSize, parentFolderId, cancellationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadSession = yield this.createFileUploadSession({
                fileName: fileName,
                fileSize: fileSize,
                folderId: parentFolderId,
            }, {
                headers: new CreateFileUploadSessionHeaders({}),
                cancellationToken: cancellationToken,
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
            const fileHash = new utils_js_8.Hash({ algorithm: 'sha1' });
            const chunksIterator = (0, utils_js_5.iterateChunks)(file, partSize, fileSize);
            const results = yield (0, utils_js_7.reduceIterator)(chunksIterator, this.reducer.bind(this), {
                lastIndex: -1,
                parts: [],
                fileSize: fileSize,
                uploadSessionId: uploadSessionId,
                fileHash: fileHash,
            });
            const parts = results.parts;
            const processedSessionParts = yield this.getFileUploadSessionParts(uploadSessionId, {
                queryParams: {},
                headers: new GetFileUploadSessionPartsHeaders({}),
                cancellationToken: cancellationToken,
            });
            if (!(processedSessionParts.totalCount == totalParts)) {
                throw new Error('Assertion failed');
            }
            const processedSession = yield this.getFileUploadSessionById(uploadSessionId, {
                headers: new GetFileUploadSessionByIdHeaders({}),
                cancellationToken: cancellationToken,
            });
            yield new Promise((resolve) => setTimeout(resolve, 100000));
            if (!(processedSession.numPartsProcessed == totalParts)) {
                console.log(processedSession);
                console.log('Assertion failed');
            }
            const sha1 = yield fileHash.digestHash('base64');
            const digest = ''.concat('sha=', sha1);
            const committedSession = yield this.createFileUploadSessionCommit(uploadSessionId, { parts: parts }, { digest: digest }, {
                cancellationToken: cancellationToken,
            });
            console.log(yield this.getFileUploadSessionById(uploadSessionId, {
                headers: new GetFileUploadSessionByIdHeaders({}),
                cancellationToken: cancellationToken,
            }));
            return committedSession.entries[0];
        });
    }
}
exports.ChunkedUploadsManager = ChunkedUploadsManager;
function serializeCreateFileUploadSessionRequestBody(val) {
    return {
        ['folder_id']: val.folderId,
        ['file_size']: val.fileSize,
        ['file_name']: val.fileName,
    };
}
function deserializeCreateFileUploadSessionRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionRequestBody"',
        });
    }
    if (val.folder_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder_id" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "folder_id" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const folderId = val.folder_id;
    if (val.file_size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.file_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (val.file_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_name" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "file_name" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const fileName = val.file_name;
    return {
        folderId: folderId,
        fileSize: fileSize,
        fileName: fileName,
    };
}
function serializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    return {
        ['file_size']: val.fileSize,
        ['file_name']: val.fileName == void 0 ? void 0 : val.fileName,
    };
}
function deserializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    if (val.file_size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.file_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (!(val.file_name == void 0) && !(0, json_js_2.sdIsString)(val.file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "file_name" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileName = val.file_name == void 0 ? void 0 : val.file_name;
    return {
        fileSize: fileSize,
        fileName: fileName,
    };
}
function serializeCreateFileUploadSessionCommitRequestBody(val) {
    return {
        ['parts']: val.parts.map(function (item) {
            return (0, uploadPart_generated_js_1.serializeUploadPart)(item);
        }),
    };
}
function deserializeCreateFileUploadSessionCommitRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    if (val.parts == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parts" of type "CreateFileUploadSessionCommitRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.parts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "parts" of type "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    const parts = (0, json_js_3.sdIsList)(val.parts)
        ? val.parts.map(function (itm) {
            return (0, uploadPart_generated_js_2.deserializeUploadPart)(itm);
        })
        : [];
    return { parts: parts };
}
//# sourceMappingURL=chunkedUploads.generated.js.map