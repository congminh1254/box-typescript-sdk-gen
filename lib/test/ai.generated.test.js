"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const aiAsk_generated_js_1 = require("../schemas/aiAsk.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testAskAISingleItem', function testAskAISingleItem() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
            mode: 'single_item_qa',
            prompt: 'which direction sun rises',
            items: [
                new aiAsk_generated_js_1.AiAskItemsField({
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'Sun rises in the East',
                }),
            ],
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testAskAIMultipleItems', function testAskAIMultipleItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk1 = yield (0, commons_generated_js_2.uploadNewFile)();
        const fileToAsk2 = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
            mode: 'multiple_item_qa',
            prompt: 'Which direction sun rises?',
            items: [
                new aiAsk_generated_js_1.AiAskItemsField({
                    id: fileToAsk1.id,
                    type: 'file',
                    content: 'Earth goes around the sun',
                }),
                new aiAsk_generated_js_1.AiAskItemsField({
                    id: fileToAsk2.id,
                    type: 'file',
                    content: 'Sun rises in the East in the morning',
                }),
            ],
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk1.id);
        yield exports.client.files.deleteFileById(fileToAsk2.id);
    });
});
test('testAITextGenWithDialogueHistory', function testAITextGenWithDialogueHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiTextGen({
            prompt: 'Parapharse the document.s',
            items: [
                {
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'The Earth goes around the sun. Sun rises in the East in the morning.',
                },
            ],
            dialogueHistory: [
                {
                    prompt: 'What does the earth go around?',
                    answer: 'The sun',
                    createdAt: (0, utils_js_1.dateTimeFromString)('2021-01-01T00:00:00Z'),
                },
                {
                    prompt: 'On Earth, where does the sun rise?',
                    answer: 'East',
                    createdAt: (0, utils_js_1.dateTimeFromString)('2021-01-01T00:00:00Z'),
                },
            ],
        });
        if (!response.answer.includes('sun')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testGettingAIAskAgentConfig', function testGettingAIAskAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAskConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'ask',
            language: 'ja-JP',
        });
        if (!(aiAskConfig.type == 'ai_agent_ask')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.systemMessage == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.basicText.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.basicTextMulti.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.systemMessage == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.longText.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.longTextMulti.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGettingAITextGenAgentConfig', function testGettingAITextGenAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiTextGenConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'text_gen',
            language: 'en-US',
        });
        if (!(aiTextGenConfig.type == 'ai_agent_text_gen')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.systemMessage == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiTextGenConfig.basicGen.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.contentTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=ai.generated.test.js.map