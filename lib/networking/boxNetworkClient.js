var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodeFetch from 'node-fetch';
// import type { Readable } from 'stream';
import { sha1 } from 'hash-wasm'; // Use hash-wasm to calculate SHA1 hash in browser
import { BoxApiError, BoxSdkError } from '../box/errors';
import { FormData, Crypto, generateByteStreamFromBuffer, isBrowser, readByteStream, } from '../internal/utils';
import { sdkVersion } from './version';
import { jsonToSerializedData, sdIsMap, sdToJson, sdToUrlParams, } from '../serialization/json';
import { NetworkSession } from './network.generated';
export const userAgentHeader = `Box JavaScript generated SDK v${sdkVersion} (${isBrowser() ? navigator.userAgent : `Node ${process.version}`})`;
export const xBoxUaHeader = constructBoxUAHeader();
function createRequestInit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const { method = 'GET', headers = {}, contentType: contentTypeInput = 'application/json', data, fileStream, } = options;
        const { contentHeaders = {}, body } = yield (() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const contentHeaders = {};
            if (options.multipartData) {
                const FormDataClass = isBrowser() ? window.FormData : FormData;
                const formData = new FormDataClass();
                for (const item of options.multipartData) {
                    if (item.fileStream) {
                        const buffer = yield readByteStream(item.fileStream);
                        const blob = isBrowser() ? new Blob([buffer]) : buffer;
                        contentHeaders['content-md5'] = yield calculateMD5Hash(buffer);
                        formData.append(item.partName, blob, {
                            filename: (_a = item.fileName) !== null && _a !== void 0 ? _a : 'file',
                            contentType: (_b = item.contentType) !== null && _b !== void 0 ? _b : 'application/octet-stream',
                        });
                    }
                    else if (item.data) {
                        formData.append(item.partName, sdToJson(item.data));
                    }
                    else {
                        throw new BoxSdkError({
                            message: 'Multipart item must have either body or fileStream',
                        });
                    }
                }
                return {
                    contentHeaders: Object.assign(Object.assign({}, (!isBrowser() && {
                        'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
                    })), contentHeaders),
                    body: formData,
                };
            }
            contentHeaders['Content-Type'] = contentTypeInput;
            switch (contentTypeInput) {
                case 'application/json':
                case 'application/json-patch+json':
                    return { contentHeaders, body: sdToJson(data) };
                case 'application/x-www-form-urlencoded':
                    return { contentHeaders, body: sdToUrlParams(data) };
                case 'application/octet-stream':
                    if (!fileStream) {
                        throw new BoxSdkError({
                            message: 'fileStream required for application/octet-stream content type',
                        });
                    }
                    return {
                        contentHeaders,
                        body: isBrowser() ? yield readByteStream(fileStream) : fileStream,
                    };
                default:
                    throw new BoxSdkError({
                        message: `Unsupported content type : ${contentTypeInput}`,
                    });
            }
        }))();
        let newBody = body;
        return Object.assign({ method, headers: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, contentHeaders), headers), (options.auth && {
                Authorization: yield options.auth.retrieveAuthorizationHeader(options.networkSession),
            })), { 'User-Agent': userAgentHeader, 'X-Box-UA': xBoxUaHeader }), (_a = options.networkSession) === null || _a === void 0 ? void 0 : _a.additionalHeaders), body: newBody, signal: options.cancellationToken, agent: (_b = options.networkSession) === null || _b === void 0 ? void 0 : _b.agent }, (fileStream && isBrowser() && { duplex: 'half' }));
    });
}
export class BoxNetworkClient {
    constructor(fields) {
        Object.assign(this, fields);
    }
    fetch(options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const numRetries = (_a = options.numRetries) !== null && _a !== void 0 ? _a : 0;
            const networkSession = (_b = options.networkSession) !== null && _b !== void 0 ? _b : new NetworkSession({});
            const fetchOptions = ((_c = networkSession.interceptors) === null || _c === void 0 ? void 0 : _c.length)
                ? networkSession.interceptors.reduce((modifiedOptions, interceptor) => interceptor.beforeRequest(modifiedOptions), options)
                : options;
            const fileStreamBuffer = fetchOptions.fileStream
                ? yield readByteStream(fetchOptions.fileStream)
                : void 0;
            const requestInit = yield createRequestInit(Object.assign(Object.assign({}, fetchOptions), { fileStream: fileStreamBuffer
                    ? yield generateByteStreamFromBuffer(fileStreamBuffer)
                    : void 0 }));
            const { params = {} } = fetchOptions;
            const response = yield nodeFetch(''.concat(fetchOptions.url, Object.keys(params).length === 0 || fetchOptions.url.endsWith('?')
                ? ''
                : '?', new URLSearchParams(params).toString()), Object.assign(Object.assign({}, requestInit), { redirect: isBrowser() ? 'follow' : 'manual' }));
            const contentType = (_d = response.headers.get('content-type')) !== null && _d !== void 0 ? _d : '';
            const ignoreResponseBody = fetchOptions.followRedirects === false;
            const responseBytesBuffer = !ignoreResponseBody
                ? yield response.arrayBuffer()
                : new Uint8Array();
            const data = (() => {
                if (!ignoreResponseBody && contentType.includes('application/json')) {
                    const text = new TextDecoder().decode(responseBytesBuffer);
                    return jsonToSerializedData(text);
                }
                return void 0;
            })();
            const content = yield generateByteStreamFromBuffer(responseBytesBuffer);
            let fetchResponse = {
                url: response.url,
                status: response.status,
                data,
                content,
                headers: Object.fromEntries(Array.from(response.headers.entries())),
            };
            if ((_e = networkSession.interceptors) === null || _e === void 0 ? void 0 : _e.length) {
                fetchResponse = networkSession.interceptors.reduce((modifiedResponse, interceptor) => interceptor.afterRequest(modifiedResponse), fetchResponse);
            }
            const shouldRetry = yield networkSession.retryStrategy.shouldRetry(fetchOptions, fetchResponse, numRetries);
            if (shouldRetry) {
                const retryTimeout = networkSession.retryStrategy.retryAfter(fetchOptions, fetchResponse, numRetries);
                yield new Promise((resolve) => setTimeout(resolve, retryTimeout));
                return this.fetch(Object.assign(Object.assign({}, options), { numRetries: numRetries + 1 }));
            }
            if (fetchResponse.status >= 300 &&
                fetchResponse.status < 400 &&
                fetchOptions.followRedirects !== false) {
                if (!fetchResponse.headers['location']) {
                    throw new BoxSdkError({
                        message: `Unable to follow redirect for ${fetchOptions.url}`,
                    });
                }
                const sameOrigin = new URL(fetchResponse.headers['location']).origin ===
                    new URL(fetchOptions.url).origin;
                return this.fetch(Object.assign(Object.assign({}, options), { params: undefined, auth: sameOrigin ? fetchOptions.auth : undefined, url: fetchResponse.headers['location'] }));
            }
            if (fetchResponse.status >= 200 && fetchResponse.status < 400) {
                return fetchResponse;
            }
            const [code, contextInfo, requestId, helpUrl] = sdIsMap(fetchResponse.data)
                ? [
                    sdToJson(fetchResponse.data['code']),
                    sdIsMap(fetchResponse.data['context_info'])
                        ? fetchResponse.data['context_info']
                        : undefined,
                    sdToJson(fetchResponse.data['request_id']),
                    sdToJson(fetchResponse.data['help_url']),
                ]
                : [];
            throw new BoxApiError({
                message: `${fetchResponse.status}`,
                timestamp: `${Date.now()}`,
                requestInfo: {
                    method: requestInit.method,
                    url: fetchOptions.url,
                    queryParams: params,
                    headers: (_f = requestInit.headers) !== null && _f !== void 0 ? _f : {},
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
            });
        });
    }
}
function calculateMD5Hash(data) {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Calculate the SHA1 hash of the data
         */
        let createHash;
        // Browser environment
        if (isBrowser()) {
            return yield sha1(data);
        }
        // Node environment
        createHash = Crypto.createHash;
        return createHash('sha1').update(data).digest('hex');
    });
}
function constructBoxUAHeader() {
    const analyticsIdentifiers = {
        agent: `box-javascript-generated-sdk/${sdkVersion}`,
        env: isBrowser()
            ? navigator.userAgent
            : `Node/${process.version.replace('v', '')}`,
    };
    return Object.keys(analyticsIdentifiers)
        .map((k) => `${k}=${analyticsIdentifiers[k]}`)
        .join('; ');
}
// Retry intervals are between 50% and 150% of the exponentially increasing base amount
const RETRY_RANDOMIZATION_FACTOR = 0.5;
/**
 * Calculate the exponential backoff time with randomized jitter
 * @param {int} numRetries Which retry number this one will be
 * @param {int} baseInterval The base retry interval set in config
 * @returns {int} The number of milliseconds after which to retry
 */
export function getRetryTimeout(numRetries, baseInterval) {
    var minRandomization = 1 - RETRY_RANDOMIZATION_FACTOR;
    var maxRandomization = 1 + RETRY_RANDOMIZATION_FACTOR;
    var randomization = Math.random() * (maxRandomization - minRandomization) + minRandomization;
    var exponential = Math.pow(2, numRetries - 1);
    return Math.ceil(exponential * baseInterval * randomization);
}
//# sourceMappingURL=boxNetworkClient.js.map