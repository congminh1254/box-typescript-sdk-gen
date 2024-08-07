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
exports.ShieldInformationBarrierReportsManager = exports.GetShieldInformationBarrierReportByIdHeaders = exports.CreateShieldInformationBarrierReportHeaders = exports.GetShieldInformationBarrierReportsHeaders = exports.GetShieldInformationBarrierReportByIdOptionals = exports.CreateShieldInformationBarrierReportOptionals = exports.GetShieldInformationBarrierReportsOptionals = void 0;
const shieldInformationBarrierReports_generated_js_1 = require("../schemas/shieldInformationBarrierReports.generated.js");
const shieldInformationBarrierReport_generated_js_1 = require("../schemas/shieldInformationBarrierReport.generated.js");
const shieldInformationBarrierReference_generated_js_1 = require("../schemas/shieldInformationBarrierReference.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
class GetShieldInformationBarrierReportsOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierReportsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierReportsOptionals = GetShieldInformationBarrierReportsOptionals;
class CreateShieldInformationBarrierReportOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierReportHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldInformationBarrierReportOptionals = CreateShieldInformationBarrierReportOptionals;
class GetShieldInformationBarrierReportByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierReportByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierReportByIdOptionals = GetShieldInformationBarrierReportByIdOptionals;
class GetShieldInformationBarrierReportsHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierReportsHeaders = GetShieldInformationBarrierReportsHeaders;
class CreateShieldInformationBarrierReportHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierReportHeaders = CreateShieldInformationBarrierReportHeaders;
class GetShieldInformationBarrierReportByIdHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierReportByIdHeaders = GetShieldInformationBarrierReportByIdHeaders;
class ShieldInformationBarrierReportsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    getShieldInformationBarrierReports(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierReportsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['shield_information_barrier_id']: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierReports_generated_js_1.deserializeShieldInformationBarrierReports)(response.data);
        });
    }
    createShieldInformationBarrierReport(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierReportOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports'), {
                method: 'POST',
                headers: headersMap,
                data: (0, shieldInformationBarrierReference_generated_js_1.serializeShieldInformationBarrierReference)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierReport_generated_js_1.deserializeShieldInformationBarrierReport)(response.data);
        });
    }
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierReportId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierReportByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_reports/', (0, utils_js_2.toString)(shieldInformationBarrierReportId)), {
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, shieldInformationBarrierReport_generated_js_1.deserializeShieldInformationBarrierReport)(response.data);
        });
    }
}
exports.ShieldInformationBarrierReportsManager = ShieldInformationBarrierReportsManager;
//# sourceMappingURL=shieldInformationBarrierReports.generated.js.map