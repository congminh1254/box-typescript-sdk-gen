"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentAskOrAiAgentTextGen = serializeAiAgentAskOrAiAgentTextGen;
exports.deserializeAiAgentAskOrAiAgentTextGen = deserializeAiAgentAskOrAiAgentTextGen;
const aiAgentAsk_generated_js_1 = require("./aiAgentAsk.generated.js");
const aiAgentAsk_generated_js_2 = require("./aiAgentAsk.generated.js");
const aiAgentTextGen_generated_js_1 = require("./aiAgentTextGen.generated.js");
const aiAgentTextGen_generated_js_2 = require("./aiAgentTextGen.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentAskOrAiAgentTextGen(val) {
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_1.serializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_1.serializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentAskOrAiAgentTextGen(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentAskOrAiAgentTextGen"',
        });
    }
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_2.deserializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_2.deserializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentAskOrAiAgentTextGen",
    });
}
//# sourceMappingURL=aiAgentAskOrAiAgentTextGen.generated.js.map