"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentLongTextToolEmbeddingsStrategyField = serializeAiAgentLongTextToolEmbeddingsStrategyField;
exports.deserializeAiAgentLongTextToolEmbeddingsStrategyField = deserializeAiAgentLongTextToolEmbeddingsStrategyField;
exports.serializeAiAgentLongTextToolEmbeddingsField = serializeAiAgentLongTextToolEmbeddingsField;
exports.deserializeAiAgentLongTextToolEmbeddingsField = deserializeAiAgentLongTextToolEmbeddingsField;
exports.serializeAiAgentLongTextTool = serializeAiAgentLongTextTool;
exports.deserializeAiAgentLongTextTool = deserializeAiAgentLongTextTool;
const aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_1 = require("./aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi.generated.js");
const aiAgentBasicTextToolTextGen_generated_js_1 = require("./aiAgentBasicTextToolTextGen.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiAgentLongTextToolEmbeddingsStrategyField(val) {
    return {
        ['id']: val.id == void 0 ? void 0 : val.id,
        ['num_tokens_per_chunk']: val.numTokensPerChunk == void 0 ? void 0 : val.numTokensPerChunk,
    };
}
function deserializeAiAgentLongTextToolEmbeddingsStrategyField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.num_tokens_per_chunk == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_per_chunk)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_per_chunk" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    const numTokensPerChunk = val.num_tokens_per_chunk == void 0 ? void 0 : val.num_tokens_per_chunk;
    return {
        id: id,
        numTokensPerChunk: numTokensPerChunk,
    };
}
function serializeAiAgentLongTextToolEmbeddingsField(val) {
    return {
        ['model']: val.model == void 0 ? void 0 : val.model,
        ['strategy']: val.strategy == void 0
            ? void 0
            : serializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy),
    };
}
function deserializeAiAgentLongTextToolEmbeddingsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolEmbeddingsField"',
        });
    }
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextToolEmbeddingsField"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    const strategy = val.strategy == void 0
        ? void 0
        : deserializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy);
    return {
        model: model,
        strategy: strategy,
    };
}
function serializeAiAgentLongTextTool(val) {
    const base = (0, aiAgentBasicTextToolTextGen_generated_js_1.serializeAiAgentBasicTextToolTextGen)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextTool"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['embeddings']: val.embeddings == void 0
            ? void 0
            : serializeAiAgentLongTextToolEmbeddingsField(val.embeddings),
    });
}
function deserializeAiAgentLongTextTool(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextTool"',
        });
    }
    const embeddings = val.embeddings == void 0
        ? void 0
        : deserializeAiAgentLongTextToolEmbeddingsField(val.embeddings);
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.system_message == void 0) && !(0, json_js_2.sdIsString)(val.system_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiAgentLongTextTool"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !(0, json_js_2.sdIsString)(val.prompt_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiAgentLongTextTool"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentLongTextTool"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi_generated_js_1.deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi)(val.llm_endpoint_params);
    return {
        embeddings: embeddings,
        model: model,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentLongTextTool.generated.js.map