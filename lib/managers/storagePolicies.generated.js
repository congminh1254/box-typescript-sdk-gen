var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeStoragePolicies } from '../schemas/storagePolicies.generated.js';
import { deserializeStoragePolicy } from '../schemas/storagePolicy.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetStoragePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetStoragePoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetStoragePolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class StoragePoliciesManager {
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
     * Fetches all the storage policies in the enterprise.
     * @param {GetStoragePoliciesQueryParams} queryParams Query parameters of getStoragePolicies method
     * @param {GetStoragePoliciesHeadersInput} headersInput Headers of getStoragePolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<StoragePolicies>}
     */
    getStoragePolicies() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetStoragePoliciesHeaders({}), cancellationToken) {
            const headers = new GetStoragePoliciesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = prepareParams({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(toString).join(',')
                    : undefined,
                ['marker']: toString(queryParams.marker),
                ['limit']: toString(queryParams.limit),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeStoragePolicies(response.data)), { rawData: response.data });
        });
    }
    /**
       * Fetches a specific storage policy.
       * @param {string} storagePolicyId The ID of the storage policy.
      Example: "34342"
       * @param {GetStoragePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicy>}
       */
    getStoragePolicyById(storagePolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyId, optionalsInput = {}) {
            const optionals = new GetStoragePolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies/', toString(storagePolicyId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeStoragePolicy(response.data)), { rawData: response.data });
        });
    }
}
//# sourceMappingURL=storagePolicies.generated.js.map