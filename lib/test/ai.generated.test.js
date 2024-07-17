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
//# sourceMappingURL=ai.generated.test.js.map