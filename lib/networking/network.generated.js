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
        this.agent = (0, utils_js_1.createAgent)(void 0, void 0);
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
        if (fields.proxyConfig) {
            this.proxyConfig = fields.proxyConfig;
        }
    }
    /**
       * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including additional headers to be attached to every API call.
       * @param {{
          readonly [key: string]: string;
      }} additionalHeaders Headers, which are appended to each API request
       * @returns {NetworkSession}
       */
    withAdditionalHeaders(additionalHeaders = {}) {
        return new NetworkSession({
            additionalHeaders: Object.assign(Object.assign({}, this.additionalHeaders), additionalHeaders),
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom base urls to be used for every API call.
     * @param {BaseUrls} baseUrls Custom base urls
     * @returns {NetworkSession}
     */
    withCustomBaseUrls(baseUrls) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom agent options to be used for every API call.
     * @param {AgentOptions} agentOptions Custom agent options
     * @returns {NetworkSession}
     */
    withCustomAgentOptions(agentOptions) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: (0, utils_js_1.createAgent)(agentOptions, this.proxyConfig),
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also additional including custom interceptors.
     * @param {readonly Interceptor[]} interceptors Custom base urls
     * @returns {NetworkSession}
     */
    withInterceptors(interceptors) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors.concat(interceptors),
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including a custom proxy configuration.
     * @param {ProxyConfig} proxyConfig
     * @returns {NetworkSession}
     */
    withProxy(proxyConfig) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: (0, utils_js_1.createAgent)(this.agentOptions, proxyConfig),
            agentOptions: this.agentOptions,
            proxyConfig: proxyConfig,
        });
    }
}
exports.NetworkSession = NetworkSession;
//# sourceMappingURL=network.generated.js.map