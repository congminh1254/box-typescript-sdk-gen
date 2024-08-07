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
exports.AiManager = exports.GetAiAgentDefaultConfigHeaders = exports.CreateAiTextGenHeaders = exports.CreateAiAskHeaders = exports.GetAiAgentDefaultConfigOptionals = exports.CreateAiTextGenOptionals = exports.CreateAiAskOptionals = void 0;
exports.serializeGetAiAgentDefaultConfigQueryParamsModeField = serializeGetAiAgentDefaultConfigQueryParamsModeField;
exports.deserializeGetAiAgentDefaultConfigQueryParamsModeField = deserializeGetAiAgentDefaultConfigQueryParamsModeField;
const aiResponse_generated_js_1 = require("../schemas/aiResponse.generated.js");
const aiAsk_generated_js_1 = require("../schemas/aiAsk.generated.js");
const aiTextGen_generated_js_1 = require("../schemas/aiTextGen.generated.js");
const aiAgentAskOrAiAgentTextGen_generated_js_1 = require("../schemas/aiAgentAskOrAiAgentTextGen.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
const errors_js_1 = require("../box/errors.js");
class CreateAiAskOptionals {
    constructor(fields) {
        this.headers = new CreateAiAskHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateAiAskOptionals = CreateAiAskOptionals;
class CreateAiTextGenOptionals {
    constructor(fields) {
        this.headers = new CreateAiTextGenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateAiTextGenOptionals = CreateAiTextGenOptionals;
class GetAiAgentDefaultConfigOptionals {
    constructor(fields) {
        this.headers = new GetAiAgentDefaultConfigHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetAiAgentDefaultConfigOptionals = GetAiAgentDefaultConfigOptionals;
class CreateAiAskHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiAskHeaders = CreateAiAskHeaders;
class CreateAiTextGenHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiTextGenHeaders = CreateAiTextGenHeaders;
class GetAiAgentDefaultConfigHeaders {
    constructor(fields) {
        this.extraHeaders = {};
        if (fields.extraHeaders) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetAiAgentDefaultConfigHeaders = GetAiAgentDefaultConfigHeaders;
class AiManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth) {
            this.auth = fields.auth;
        }
        if (fields.networkSession) {
            this.networkSession = fields.networkSession;
        }
    }
    createAiAsk(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiAskOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/ask'), {
                method: 'POST',
                headers: headersMap,
                data: (0, aiAsk_generated_js_1.serializeAiAsk)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, aiResponse_generated_js_1.deserializeAiResponse)(response.data);
        });
    }
    createAiTextGen(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiTextGenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/text_gen'), {
                method: 'POST',
                headers: headersMap,
                data: (0, aiTextGen_generated_js_1.serializeAiTextGen)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, aiResponse_generated_js_1.deserializeAiResponse)(response.data);
        });
    }
    getAiAgentDefaultConfig(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetAiAgentDefaultConfigOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['mode']: (0, utils_js_2.toString)(queryParams.mode),
                ['language']: (0, utils_js_2.toString)(queryParams.language),
                ['model']: (0, utils_js_2.toString)(queryParams.model),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = (yield (0, fetch_js_1.fetch)(''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agent_default'), {
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return (0, aiAgentAskOrAiAgentTextGen_generated_js_1.deserializeAiAgentAskOrAiAgentTextGen)(response.data);
        });
    }
}
exports.AiManager = AiManager;
function serializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
    return val;
}
function deserializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
    if (val == 'ask') {
        return val;
    }
    if (val == 'text_gen') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetAiAgentDefaultConfigQueryParamsModeField",
    });
}
//# sourceMappingURL=ai.generated.js.map