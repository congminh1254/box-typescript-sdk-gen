var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeFileRequest } from '../schemas/fileRequest.generated.js';
import { serializeFileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated.js';
import { serializeFileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFileRequestByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFileRequestCopyOptionals {
    constructor(fields) {
        this.headers = new CreateFileRequestCopyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileRequestByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFileRequestByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFileRequestByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFileRequestCopyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileRequestsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
       * Retrieves the information about a file request.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {GetFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    getFileRequestById(fileRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, optionalsInput = {}) {
            const optionals = new GetFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', toString(fileRequestId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeFileRequest(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a file request. This can be used to activate or
       * deactivate a file request.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {FileRequestUpdateRequest} requestBody Request body of updateFileRequestById method
       * @param {UpdateFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    updateFileRequestById(fileRequestId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({ ['if-match']: toString(headers.ifMatch) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', toString(fileRequestId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeFileRequestUpdateRequest(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeFileRequest(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a file request permanently.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {DeleteFileRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileRequestById(fileRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, optionalsInput = {}) {
            const optionals = new DeleteFileRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', toString(fileRequestId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
       * Copies an existing file request that is already present on one folder,
       * and applies it to another folder.
       * @param {string} fileRequestId The unique identifier that represent a file request.
      
      The ID for any file request can be determined
      by visiting a file request builder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/filerequest/123`
      the `file_request_id` is `123`.
      Example: "123"
       * @param {FileRequestCopyRequest} requestBody Request body of createFileRequestCopy method
       * @param {CreateFileRequestCopyOptionalsInput} optionalsInput
       * @returns {Promise<FileRequest>}
       */
    createFileRequestCopy(fileRequestId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileRequestId, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileRequestCopyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_requests/', toString(fileRequestId), '/copy'),
                method: 'POST',
                headers: headersMap,
                data: serializeFileRequestCopyRequest(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeFileRequest(response.data)), { rawData: response.data });
        });
    }
}
//# sourceMappingURL=fileRequests.generated.js.map