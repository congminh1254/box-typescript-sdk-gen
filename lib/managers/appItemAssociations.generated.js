var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeAppItemAssociations } from '../schemas/appItemAssociations.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetFileAppItemAssociationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileAppItemAssociationsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderAppItemAssociationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFolderAppItemAssociationsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileAppItemAssociationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFolderAppItemAssociationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AppItemAssociationsManager {
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
       * **This is a beta feature, which means that its availability might be limited.**
       * Returns all app items the file is associated with. This includes app items
       * associated with ancestors of the file. Assuming the context user has access
       * to the file, the type/ids are revealed even if the context user does not
       * have **View** permission on the app item.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileAppItemAssociationsOptionalsInput} optionalsInput
       * @returns {Promise<AppItemAssociations>}
       */
    getFileAppItemAssociations(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileAppItemAssociationsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = prepareParams({
                ['limit']: toString(queryParams.limit),
                ['marker']: toString(queryParams.marker),
                ['application_type']: toString(queryParams.applicationType),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/app_item_associations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeAppItemAssociations(response.data)), { rawData: response.data });
        });
    }
    /**
       * **This is a beta feature, which means that its availability might be limited.**
       * Returns all app items the folder is associated with. This includes app items
       * associated with ancestors of the folder. Assuming the context user has access
       * to the folder, the type/ids are revealed even if the context user does not
       * have **View** permission on the app item.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderAppItemAssociationsOptionalsInput} optionalsInput
       * @returns {Promise<AppItemAssociations>}
       */
    getFolderAppItemAssociations(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetFolderAppItemAssociationsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = prepareParams({
                ['limit']: toString(queryParams.limit),
                ['marker']: toString(queryParams.marker),
                ['application_type']: toString(queryParams.applicationType),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/app_item_associations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeAppItemAssociations(response.data)), { rawData: response.data });
        });
    }
}
//# sourceMappingURL=appItemAssociations.generated.js.map