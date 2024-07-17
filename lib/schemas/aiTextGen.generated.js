"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiTextGenItemsTypeField = serializeAiTextGenItemsTypeField;
exports.deserializeAiTextGenItemsTypeField = deserializeAiTextGenItemsTypeField;
exports.serializeAiTextGenItemsField = serializeAiTextGenItemsField;
exports.deserializeAiTextGenItemsField = deserializeAiTextGenItemsField;
exports.serializeAiTextGenDialogueHistoryField = serializeAiTextGenDialogueHistoryField;
exports.deserializeAiTextGenDialogueHistoryField = deserializeAiTextGenDialogueHistoryField;
exports.serializeAiTextGen = serializeAiTextGen;
exports.deserializeAiTextGen = deserializeAiTextGen;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiTextGenItemsTypeField(val) {
    return val;
}
function deserializeAiTextGenItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiTextGenItemsTypeField",
    });
}
function serializeAiTextGenItemsField(val) {
    return {
        ['id']: val.id == void 0 ? void 0 : val.id,
        ['type']: val.type == void 0 ? void 0 : serializeAiTextGenItemsTypeField(val.type),
        ['content']: val.content == void 0 ? void 0 : val.content,
    };
}
function deserializeAiTextGenItemsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiTextGenItemsField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiTextGenItemsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiTextGenItemsTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiTextGenItemsField"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
function serializeAiTextGenDialogueHistoryField(val) {
    return {
        ['prompt']: val.prompt == void 0 ? void 0 : val.prompt,
        ['answer']: val.answer == void 0 ? void 0 : val.answer,
        ['created_at']: val.createdAt == void 0 ? void 0 : (0, utils_js_1.serializeDateTime)(val.createdAt),
    };
}
function deserializeAiTextGenDialogueHistoryField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiTextGenDialogueHistoryField"',
        });
    }
    if (!(val.prompt == void 0) && !(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiTextGenDialogueHistoryField"',
        });
    }
    const prompt = val.prompt == void 0 ? void 0 : val.prompt;
    if (!(val.answer == void 0) && !(0, json_js_1.sdIsString)(val.answer)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "answer" of type "AiTextGenDialogueHistoryField"',
        });
    }
    const answer = val.answer == void 0 ? void 0 : val.answer;
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiTextGenDialogueHistoryField"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    return {
        prompt: prompt,
        answer: answer,
        createdAt: createdAt,
    };
}
function serializeAiTextGen(val) {
    return {
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiTextGenItemsField(item);
        }),
        ['dialogue_history']: val.dialogueHistory == void 0
            ? void 0
            : val.dialogueHistory.map(function (item) {
                return serializeAiTextGenDialogueHistoryField(item);
            }),
    };
}
function deserializeAiTextGen(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiTextGen"' });
    }
    if (val.prompt == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "prompt" of type "AiTextGen" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiTextGen"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiTextGen" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiTextGen"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiTextGenItemsField(itm);
        })
        : [];
    if (!(val.dialogue_history == void 0) && !(0, json_js_2.sdIsList)(val.dialogue_history)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "dialogue_history" of type "AiTextGen"',
        });
    }
    const dialogueHistory = val.dialogue_history == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.dialogue_history)
            ? val.dialogue_history.map(function (itm) {
                return deserializeAiTextGenDialogueHistoryField(itm);
            })
            : [];
    return {
        prompt: prompt,
        items: items,
        dialogueHistory: dialogueHistory,
    };
}
//# sourceMappingURL=aiTextGen.generated.js.map