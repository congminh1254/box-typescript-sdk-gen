var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deserializeIntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { deserializeIntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { serializeIntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { serializeIntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { deserializeIntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateSlackIntegrationMappingOptionals {
    constructor(fields) {
        this.headers = new CreateSlackIntegrationMappingHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateSlackIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateSlackIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteSlackIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteSlackIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSlackIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateSlackIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateSlackIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteSlackIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class IntegrationMappingsManager {
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
     * Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetSlackIntegrationMappingQueryParams} queryParams Query parameters of getSlackIntegrationMapping method
     * @param {GetSlackIntegrationMappingHeadersInput} headersInput Headers of getSlackIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappings>}
     */
    getSlackIntegrationMapping() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetSlackIntegrationMappingHeaders({}), cancellationToken) {
            const headers = new GetSlackIntegrationMappingHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = prepareParams({
                ['marker']: toString(queryParams.marker),
                ['limit']: toString(queryParams.limit),
                ['partner_item_type']: toString(queryParams.partnerItemType),
                ['partner_item_id']: toString(queryParams.partnerItemId),
                ['box_item_id']: toString(queryParams.boxItemId),
                ['box_item_type']: toString(queryParams.boxItemType),
                ['is_manually_created']: toString(queryParams.isManuallyCreated),
            });
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeIntegrationMappings(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
     * by mapping a Slack channel to a Box item.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingSlackCreateRequest} requestBody Request body of createSlackIntegrationMapping method
     * @param {CreateSlackIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMapping>}
     */
    createSlackIntegrationMapping(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateSlackIntegrationMappingOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack'),
                method: 'POST',
                headers: headersMap,
                data: serializeIntegrationMappingSlackCreateRequest(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeIntegrationMapping(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       * Supports updating the Box folder ID and options.
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping
      Example: "11235432"
       * @param {UpdateSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMapping>}
       */
    updateSlackIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new UpdateSlackIntegrationMappingByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack/', toString(integrationMappingId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateSlackIntegrationMappingByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, deserializeIntegrationMapping(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       *
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping
      Example: "11235432"
       * @param {DeleteSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteSlackIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new DeleteSlackIntegrationMappingByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = prepareParams(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack/', toString(integrationMappingId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
export function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetSlackIntegrationMappingQueryParamsPartnerItemTypeField",
    });
}
export function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val) {
    return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetSlackIntegrationMappingQueryParamsBoxItemTypeField",
    });
}
export function serializeUpdateSlackIntegrationMappingByIdRequestBody(val) {
    return {
        ['box_item']: val.boxItem == void 0
            ? val.boxItem
            : serializeIntegrationMappingBoxItemSlack(val.boxItem),
        ['options']: val.options == void 0
            ? val.options
            : serializeIntegrationMappingSlackOptions(val.options),
    };
}
export function deserializeUpdateSlackIntegrationMappingByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSlackIntegrationMappingByIdRequestBody"',
        });
    }
    const boxItem = val.box_item == void 0
        ? void 0
        : deserializeIntegrationMappingBoxItemSlack(val.box_item);
    const options = val.options == void 0
        ? void 0
        : deserializeIntegrationMappingSlackOptions(val.options);
    return {
        boxItem: boxItem,
        options: options,
    };
}
//# sourceMappingURL=integrationMappings.generated.js.map