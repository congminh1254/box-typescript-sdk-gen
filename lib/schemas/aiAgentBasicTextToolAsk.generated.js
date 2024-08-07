"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentBasicTextToolAsk = serializeAiAgentBasicTextToolAsk;
exports.deserializeAiAgentBasicTextToolAsk = deserializeAiAgentBasicTextToolAsk;
const aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_1 = require("./aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js");
const aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_2 = require("./aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiAgentBasicTextToolAsk(val) {
    return {
        ['model']: val.model == void 0 ? void 0 : val.model,
        ['system_message']: val.systemMessage == void 0 ? void 0 : val.systemMessage,
        ['prompt_template']: val.promptTemplate == void 0 ? void 0 : val.promptTemplate,
        ['num_tokens_for_completion']: val.numTokensForCompletion == void 0
            ? void 0
            : val.numTokensForCompletion,
        ['llm_endpoint_params']: val.llmEndpointParams == void 0
            ? void 0
            : (0, aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_1.serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi)(val.llmEndpointParams),
    };
}
function deserializeAiAgentBasicTextToolAsk(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentBasicTextToolAsk"',
        });
    }
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentBasicTextToolAsk"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.system_message == void 0) && !(0, json_js_2.sdIsString)(val.system_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiAgentBasicTextToolAsk"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !(0, json_js_2.sdIsString)(val.prompt_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiAgentBasicTextToolAsk"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicTextToolAsk"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_2.deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi)(val.llm_endpoint_params);
    return {
        model: model,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentBasicTextToolAsk.generated.js.map