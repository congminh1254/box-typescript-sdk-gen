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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xBoxUaHeader = exports.userAgentHeader = void 0;
exports.fetch = fetch;
const node_fetch_1 = __importDefault(require("node-fetch"));
const errors_1 = require("../box/errors");
const utils_1 = require("../internal/utils");
const version_1 = require("./version");
const json_1 = require("../serialization/json");
const getRetryTimeout_1 = require("./getRetryTimeout");
exports.userAgentHeader = `Box JavaScript generated SDK v${version_1.sdkVersion} (${(0, utils_1.isBrowser)() ? navigator.userAgent : `Node ${process.version}`})`;
exports.xBoxUaHeader = constructBoxUAHeader();
function createRequestInit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const { method = 'GET', headers = {}, contentType: contentTypeInput = 'application/json', data, fileStream, } = options;
        const { contentType, body } = yield (() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (options.multipartData) {
                const FormData = (0, utils_1.isBrowser)()
                    ? window.FormData
                    : eval('require')('form-data');
                const formData = new FormData();
                for (const item of options.multipartData) {
                    if (item.fileStream) {
                        const buffer = yield (0, utils_1.readByteStream)(item.fileStream);
                        const blob = (0, utils_1.isBrowser)() ? new Blob([buffer]) : buffer;
                        headers['content-md5'] = yield calculateMD5Hash(buffer);
                        formData.append(item.partName, blob, {
                            filename: (_a = item.fileName) !== null && _a !== void 0 ? _a : 'file',
                            contentType: (_b = item.contentType) !== null && _b !== void 0 ? _b : 'application/octet-stream',
                        });
                    }
                    else if (item.data) {
                        formData.append(item.partName, (0, json_1.sdToJson)(item.data));
                    }
                    else {
                        throw new errors_1.BoxSdkError({
                            message: 'Multipart item must have either body or fileStream',
                        });
                    }
                }
                return {
                    contentType: !(0, utils_1.isBrowser)()
                        ? `multipart/form-data; boundary=${formData.getBoundary()}`
                        : undefined,
                    body: formData,
                };
            }
            const contentType = contentTypeInput;
            switch (contentType) {
                case 'application/json':
                case 'application/json-patch+json':
                    return { contentType, body: (0, json_1.sdToJson)(data) };
                case 'application/x-www-form-urlencoded':
                    return { contentType, body: (0, json_1.sdToUrlParams)(data) };
                case 'application/octet-stream':
                    if (!fileStream) {
                        throw new errors_1.BoxSdkError({
                            message: 'fileStream required for application/octet-stream content type',
                        });
                    }
                    return { contentType, body: fileStream };
                default:
                    throw new errors_1.BoxSdkError({
                        message: `Unsupported content type : ${contentType}`,
                    });
            }
        }))();
        return {
            method,
            headers: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (contentType && { 'Content-Type': contentType })), headers), (options.auth && {
                Authorization: yield options.auth.retrieveAuthorizationHeader(options.networkSession),
            })), { 'User-Agent': exports.userAgentHeader, 'X-Box-UA': exports.xBoxUaHeader }), (_a = options.networkSession) === null || _a === void 0 ? void 0 : _a.additionalHeaders),
            body,
            signal: options.cancellationToken,
            agent: (_b = options.networkSession) === null || _b === void 0 ? void 0 : _b.agent,
        };
    });
}
const DEFAULT_MAX_ATTEMPTS = 5;
const RETRY_BASE_INTERVAL = 1;
const STATUS_CODE_ACCEPTED = 202, STATUS_CODE_UNAUTHORIZED = 401, STATUS_CODE_TOO_MANY_REQUESTS = 429;
function fetch(resource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const fetchOptions = ((_b = (_a = options.networkSession) === null || _a === void 0 ? void 0 : _a.interceptors) === null || _b === void 0 ? void 0 : _b.length)
            ? (_c = options.networkSession) === null || _c === void 0 ? void 0 : _c.interceptors.reduce((modifiedOptions, interceptor) => interceptor.beforeRequest(modifiedOptions), options)
            : options;
        const requestInit = yield createRequestInit(fetchOptions);
        const { params = {} } = fetchOptions;
        const response = yield (0, node_fetch_1.default)(''.concat(resource, Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?', new URLSearchParams(params).toString()), Object.assign(Object.assign({}, requestInit), { redirect: 'manual' }));
        const contentType = (_d = response.headers.get('content-type')) !== null && _d !== void 0 ? _d : '';
        const responseBytesBuffer = yield response.arrayBuffer();
        const data = (() => {
            if (contentType.includes('application/json')) {
                const text = new TextDecoder().decode(responseBytesBuffer);
                return (0, json_1.jsonToSerializedData)(text);
            }
            return void 0;
        })();
        const content = (0, utils_1.generateByteStreamFromBuffer)(responseBytesBuffer);
        let fetchResponse = {
            status: response.status,
            data,
            content,
            headers: Object.fromEntries(Array.from(response.headers.entries())),
        };
        if ((_f = (_e = fetchOptions.networkSession) === null || _e === void 0 ? void 0 : _e.interceptors) === null || _f === void 0 ? void 0 : _f.length) {
            fetchResponse = (_g = fetchOptions.networkSession) === null || _g === void 0 ? void 0 : _g.interceptors.reduce((modifiedResponse, interceptor) => interceptor.afterRequest(modifiedResponse), fetchResponse);
        }
        if (fetchResponse.status >= 300 && fetchResponse.status < 400) {
            if (!fetchResponse.headers['location']) {
                throw new errors_1.BoxSdkError({
                    message: `Unable to follow redirect for ${resource}`,
                });
            }
            return fetch(fetchResponse.headers['location'], options);
        }
        console.log(`Status: ${fetchResponse.status}`);
        const acceptedWithRetryAfter = fetchResponse.status === STATUS_CODE_ACCEPTED &&
            fetchResponse.headers['retry-after'];
        if (fetchResponse.status >= 400 || acceptedWithRetryAfter) {
            const { numRetries = 0 } = fetchOptions;
            const reauthenticationNeeded = fetchResponse.status == STATUS_CODE_UNAUTHORIZED;
            if (reauthenticationNeeded && fetchOptions.auth) {
                yield fetchOptions.auth.refreshToken(fetchOptions.networkSession);
                // retry the request right away
                return fetch(resource, Object.assign(Object.assign({}, fetchOptions), { numRetries: numRetries + 1 }));
            }
            const isRetryable = fetchOptions.contentType !== 'application/x-www-form-urlencoded' &&
                (fetchResponse.status === STATUS_CODE_TOO_MANY_REQUESTS ||
                    acceptedWithRetryAfter ||
                    fetchResponse.status >= 500);
            if (isRetryable && numRetries < DEFAULT_MAX_ATTEMPTS) {
                const retryTimeout = fetchResponse.headers['retry-after']
                    ? parseFloat(fetchResponse.headers['retry-after']) * 1000
                    : (0, getRetryTimeout_1.getRetryTimeout)(numRetries, RETRY_BASE_INTERVAL * 1000);
                yield new Promise((resolve) => setTimeout(resolve, retryTimeout));
                return fetch(resource, Object.assign(Object.assign({}, fetchOptions), { numRetries: numRetries + 1 }));
            }
            const [code, contextInfo, requestId, helpUrl] = (0, json_1.sdIsMap)(fetchResponse.data)
                ? [
                    (0, json_1.sdToJson)(fetchResponse.data['code']),
                    (0, json_1.sdIsMap)(fetchResponse.data['context_info'])
                        ? fetchResponse.data['context_info']
                        : undefined,
                    (0, json_1.sdToJson)(fetchResponse.data['request_id']),
                    (0, json_1.sdToJson)(fetchResponse.data['help_url']),
                ]
                : [];
            throw new errors_1.BoxApiError({
                message: `${fetchResponse.status}`,
                timestamp: `${Date.now()}`,
                requestInfo: {
                    method: requestInit.method,
                    url: resource,
                    queryParams: params,
                    headers: (_h = requestInit.headers) !== null && _h !== void 0 ? _h : {},
                    body: typeof requestInit.body === 'string' ? requestInit.body : undefined,
                },
                responseInfo: {
                    statusCode: fetchResponse.status,
                    headers: fetchResponse.headers,
                    body: fetchResponse.data,
                    rawBody: new TextDecoder().decode(responseBytesBuffer),
                    code: code,
                    contextInfo: contextInfo,
                    requestId: requestId,
                    helpUrl: helpUrl,
                },
                name: 'BoxApiError',
            });
        }
        return fetchResponse;
    });
}
function calculateMD5Hash(data) {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Calculate the SHA1 hash of the data
         */
        let createHash;
        // Browser environment
        if ((0, utils_1.isBrowser)()) {
            let dataBuffer = typeof data === 'string' ? new TextEncoder().encode(data) : data;
            let hashBuffer = yield window.crypto.subtle.digest('SHA-1', dataBuffer);
            let hashArray = Array.from(new Uint8Array(hashBuffer));
            let hashHex = hashArray
                .map((b) => b.toString(16).padStart(2, '0'))
                .join('');
            return hashHex;
        }
        // Node environment
        createHash = eval('require')('crypto').createHash;
        return createHash('sha1').update(data).digest('hex');
    });
}
function constructBoxUAHeader() {
    const analyticsIdentifiers = {
        agent: `box-javascript-generated-sdk/${version_1.sdkVersion}`,
        env: (0, utils_1.isBrowser)()
            ? navigator.userAgent
            : `Node/${process.version.replace('v', '')}`,
    };
    return Object.keys(analyticsIdentifiers)
        .map((k) => `${k}=${analyticsIdentifiers[k]}`)
        .join('; ');
}
//# sourceMappingURL=fetch.js.map