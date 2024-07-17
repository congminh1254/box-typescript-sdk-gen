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
exports.AiManager = exports.CreateAiTextGenHeaders = exports.CreateAiAskHeaders = exports.CreateAiTextGenOptionals = exports.CreateAiAskOptionals = void 0;
const aiResponse_generated_js_1 = require("../schemas/aiResponse.generated.js");
const aiAsk_generated_js_1 = require("../schemas/aiAsk.generated.js");
const aiTextGen_generated_js_1 = require("../schemas/aiTextGen.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const utils_js_1 = require("../internal/utils.js");
const fetch_js_1 = require("../networking/fetch.js");
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
}
exports.AiManager = AiManager;
//# sourceMappingURL=ai.generated.js.map