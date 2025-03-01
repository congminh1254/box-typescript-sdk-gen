import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { serializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { deserializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export class AiAgentAsk {
    constructor(fields) {
        /**
         * The type of AI agent used to handle queries. */
        this.type = 'ai_agent_ask';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.longText !== undefined) {
            this.longText = fields.longText;
        }
        if (fields.basicText !== undefined) {
            this.basicText = fields.basicText;
        }
        if (fields.longTextMulti !== undefined) {
            this.longTextMulti = fields.longTextMulti;
        }
        if (fields.basicTextMulti !== undefined) {
            this.basicTextMulti = fields.basicTextMulti;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiAgentAskTypeField(val) {
    return val;
}
export function deserializeAiAgentAskTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AiAgentAskTypeField" });
}
export function serializeAiAgentAsk(val) {
    return {
        ['type']: serializeAiAgentAskTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiAgentLongTextTool(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiAgentBasicTextTool(val.basicText),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : serializeAiAgentLongTextTool(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : serializeAiAgentBasicTextTool(val.basicTextMulti),
    };
}
export function deserializeAiAgentAsk(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAgentAsk"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiAgentAsk" to be defined',
        });
    }
    const type = deserializeAiAgentAskTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text_multi);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
    };
}
export function serializeAiAgentAskInput(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeAiAgentAskTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : serializeAiAgentLongTextTool(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : serializeAiAgentBasicTextTool(val.basicText),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : serializeAiAgentLongTextTool(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : serializeAiAgentBasicTextTool(val.basicTextMulti),
    };
}
export function deserializeAiAgentAskInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAgentAskInput"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentAskTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : deserializeAiAgentLongTextTool(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : deserializeAiAgentBasicTextTool(val.basic_text_multi);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
    };
}
//# sourceMappingURL=aiAgentAsk.generated.js.map