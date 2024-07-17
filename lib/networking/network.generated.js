"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSession = void 0;
const baseUrls_generated_js_1 = require("./baseUrls.generated.js");
const utils_js_1 = require("../internal/utils.js");
class NetworkSession {
    constructor(fields) {
        this.additionalHeaders = {};
        this.baseUrls = new baseUrls_generated_js_1.BaseUrls({});
        this.interceptors = [];
        this.agent = (0, utils_js_1.createAgent)(void 0);
        if (fields.additionalHeaders) {
            this.additionalHeaders = fields.additionalHeaders;
        }
        if (fields.baseUrls) {
            this.baseUrls = fields.baseUrls;
        }
        if (fields.interceptors) {
            this.interceptors = fields.interceptors;
        }
        if (fields.agent) {
            this.agent = fields.agent;
        }
        if (fields.agentOptions) {
            this.agentOptions = fields.agentOptions;
        }
    }
    withAdditionalHeaders(additionalHeaders = {}) {
        return new NetworkSession({
            additionalHeaders: Object.assign(Object.assign({}, this.additionalHeaders), additionalHeaders),
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
        });
    }
    withCustomBaseUrls(baseUrls) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
        });
    }
    withCustomAgentOptions(agentOptions) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: (0, utils_js_1.createAgent)(agentOptions),
            agentOptions: this.agentOptions,
        });
    }
    withInterceptors(interceptors) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors.concat(interceptors),
            agent: this.agent,
            agentOptions: this.agentOptions,
        });
    }
}
exports.NetworkSession = NetworkSession;
//# sourceMappingURL=network.generated.js.map