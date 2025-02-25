var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeShieldInformationBarrierReports } from '../schemas/shieldInformationBarrierReports.generated.js';
import { deserializeShieldInformationBarrierReport } from '../schemas/shieldInformationBarrierReport.generated.js';
import { serializeShieldInformationBarrierReference } from '../schemas/shieldInformationBarrierReference.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetShieldInformationBarrierReportsOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierReportsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateShieldInformationBarrierReportOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierReportHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierReportByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierReportByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierReportsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateShieldInformationBarrierReportHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetShieldInformationBarrierReportByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ShieldInformationBarrierReportsManager {
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
     * Lists shield information barrier reports.
     * @param {GetShieldInformationBarrierReportsQueryParams} queryParams Query parameters of getShieldInformationBarrierReports method
     * @param {GetShieldInformationBarrierReportsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierReports>}
     */
    getShieldInformationBarrierReports(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierReportsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = prepareParams({
                ['shield_information_barrier_id']: toString(queryParams.shieldInformationBarrierId),
                ['marker']: toString(queryParams.marker),
                ['limit']: toString(queryParams.limit),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierReports(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a shield information barrier report for a given barrier.
     * @param {ShieldInformationBarrierReference} requestBody Request body of createShieldInformationBarrierReport method
     * @param {CreateShieldInformationBarrierReportOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierReport>}
     */
    createShieldInformationBarrierReport(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierReportOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports'),
                method: 'POST',
                headers: headersMap,
                data: serializeShieldInformationBarrierReference(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierReport(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a shield information barrier report by its ID.
       * @param {string} shieldInformationBarrierReportId The ID of the shield information barrier Report.
      Example: "3423"
       * @param {GetShieldInformationBarrierReportByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierReport>}
       */
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierReportId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierReportByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports/', toString(shieldInformationBarrierReportId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeShieldInformationBarrierReport(response.data)), { rawData: response.data });
        });
    }
}
//# sourceMappingURL=shieldInformationBarrierReports.generated.js.map