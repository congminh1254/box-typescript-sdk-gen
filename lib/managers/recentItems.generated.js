var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeRecentItems } from '../schemas/recentItems.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetRecentItemsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RecentItemsManager {
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
     * Returns information about the recent items accessed
     * by a user, either in the last 90 days or up to the last
     * 1000 items accessed.
     * @param {GetRecentItemsQueryParams} queryParams Query parameters of getRecentItems method
     * @param {GetRecentItemsHeadersInput} headersInput Headers of getRecentItems method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<RecentItems>}
     */
    getRecentItems() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetRecentItemsHeaders({}), cancellationToken) {
            const headers = new GetRecentItemsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = prepareParams({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(toString).join(',')
                    : undefined,
                ['limit']: toString(queryParams.limit),
                ['marker']: toString(queryParams.marker),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/recent_items'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeRecentItems(response.data)), { rawData: response.data });
        });
    }
}
//# sourceMappingURL=recentItems.generated.js.map