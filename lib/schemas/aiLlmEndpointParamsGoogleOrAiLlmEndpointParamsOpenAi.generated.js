"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi = serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
exports.deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi = deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi;
const aiLlmEndpointParamsGoogle_generated_js_1 = require("./aiLlmEndpointParamsGoogle.generated.js");
const aiLlmEndpointParamsGoogle_generated_js_2 = require("./aiLlmEndpointParamsGoogle.generated.js");
const aiLlmEndpointParamsOpenAi_generated_js_1 = require("./aiLlmEndpointParamsOpenAi.generated.js");
const aiLlmEndpointParamsOpenAi_generated_js_2 = require("./aiLlmEndpointParamsOpenAi.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(val) {
    if (val.type == 'google_params') {
        return (0, aiLlmEndpointParamsGoogle_generated_js_1.serializeAiLlmEndpointParamsGoogle)(val);
    }
    if (val.type == 'openai_params') {
        return (0, aiLlmEndpointParamsOpenAi_generated_js_1.serializeAiLlmEndpointParamsOpenAi)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi"',
        });
    }
    if (val.type == 'google_params') {
        return (0, aiLlmEndpointParamsGoogle_generated_js_2.deserializeAiLlmEndpointParamsGoogle)(val);
    }
    if (val.type == 'openai_params') {
        return (0, aiLlmEndpointParamsOpenAi_generated_js_2.deserializeAiLlmEndpointParamsOpenAi)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi",
    });
}
//# sourceMappingURL=aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js.map