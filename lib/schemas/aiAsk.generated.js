"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAskItemsField = void 0;
exports.serializeAiAskModeField = serializeAiAskModeField;
exports.deserializeAiAskModeField = deserializeAiAskModeField;
exports.serializeAiAskItemsTypeField = serializeAiAskItemsTypeField;
exports.deserializeAiAskItemsTypeField = deserializeAiAskItemsTypeField;
exports.serializeAiAskItemsField = serializeAiAskItemsField;
exports.deserializeAiAskItemsField = deserializeAiAskItemsField;
exports.serializeAiAskItemsFieldInput = serializeAiAskItemsFieldInput;
exports.deserializeAiAskItemsFieldInput = deserializeAiAskItemsFieldInput;
exports.serializeAiAsk = serializeAiAsk;
exports.deserializeAiAsk = deserializeAiAsk;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiAskItemsField {
    constructor(fields) {
        this.type = 'file';
        if (fields.id) {
            this.id = fields.id;
        }
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.content) {
            this.content = fields.content;
        }
    }
}
exports.AiAskItemsField = AiAskItemsField;
function serializeAiAskModeField(val) {
    return val;
}
function deserializeAiAskModeField(val) {
    if (val == 'multiple_item_qa') {
        return val;
    }
    if (val == 'single_item_qa') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAskModeField" });
}
function serializeAiAskItemsTypeField(val) {
    return val;
}
function deserializeAiAskItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAskItemsTypeField" });
}
function serializeAiAskItemsField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiAskItemsTypeField(val.type),
        ['content']: val.content == void 0 ? void 0 : val.content,
    };
}
function deserializeAiAskItemsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAskItemsField"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiAskItemsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAskItemsField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAskItemsField" to be defined',
        });
    }
    const type = deserializeAiAskItemsTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiAskItemsField"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
function serializeAiAskItemsFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? void 0 : serializeAiAskItemsTypeField(val.type),
        ['content']: val.content == void 0 ? void 0 : val.content,
    };
}
function deserializeAiAskItemsFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAskItemsFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiAskItemsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAskItemsFieldInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiAskItemsTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiAskItemsFieldInput"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return {
        id: id,
        type: type,
        content: content,
    };
}
function serializeAiAsk(val) {
    return {
        ['mode']: serializeAiAskModeField(val.mode),
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiAskItemsField(item);
        }),
    };
}
function deserializeAiAsk(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAsk"' });
    }
    if (val.mode == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "mode" of type "AiAsk" to be defined',
        });
    }
    const mode = deserializeAiAskModeField(val.mode);
    if (val.prompt == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "prompt" of type "AiAsk" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiAsk"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiAsk" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiAsk"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiAskItemsField(itm);
        })
        : [];
    return { mode: mode, prompt: prompt, items: items };
}
//# sourceMappingURL=aiAsk.generated.js.map