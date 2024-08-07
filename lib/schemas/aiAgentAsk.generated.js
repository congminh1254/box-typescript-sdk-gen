"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentAskTypeField = serializeAiAgentAskTypeField;
exports.deserializeAiAgentAskTypeField = deserializeAiAgentAskTypeField;
exports.serializeAiAgentAsk = serializeAiAgentAsk;
exports.deserializeAiAgentAsk = deserializeAiAgentAsk;
const aiAgentLongTextTool_generated_js_1 = require("./aiAgentLongTextTool.generated.js");
const aiAgentLongTextTool_generated_js_2 = require("./aiAgentLongTextTool.generated.js");
const aiAgentBasicTextToolAsk_generated_js_1 = require("./aiAgentBasicTextToolAsk.generated.js");
const aiAgentBasicTextToolAsk_generated_js_2 = require("./aiAgentBasicTextToolAsk.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentAskTypeField(val) {
    return val;
}
function deserializeAiAgentAskTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAgentAskTypeField" });
}
function serializeAiAgentAsk(val) {
    return {
        ['type']: val.type == void 0 ? void 0 : serializeAiAgentAskTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? void 0
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? void 0
            : (0, aiAgentBasicTextToolAsk_generated_js_1.serializeAiAgentBasicTextToolAsk)(val.basicText),
        ['long_text_multi']: val.longTextMulti == void 0
            ? void 0
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? void 0
            : (0, aiAgentBasicTextToolAsk_generated_js_1.serializeAiAgentBasicTextToolAsk)(val.basicTextMulti),
    };
}
function deserializeAiAgentAsk(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentAsk"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentAskTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiAgentBasicTextToolAsk_generated_js_2.deserializeAiAgentBasicTextToolAsk)(val.basic_text);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiAgentBasicTextToolAsk_generated_js_2.deserializeAiAgentBasicTextToolAsk)(val.basic_text_multi);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
    };
}
//# sourceMappingURL=aiAgentAsk.generated.js.map