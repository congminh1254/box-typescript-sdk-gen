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
const utils_1 = require("./utils");
test('stream', () => __awaiter(void 0, void 0, void 0, function* () {
    const size = 1024 * 1024;
    const buffer = yield (0, utils_1.readByteStream)((0, utils_1.generateByteStream)(size));
    expect(buffer.length).toBe(size);
}));
test('hexStrToBase64', () => {
    const hexStr = 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3';
    const base64 = 'qUqP5cyxm6YcTAhz05Hph5gvu9M=';
    expect((0, utils_1.hexStrToBase64)(hexStr)).toBe(base64);
});
describe('date conversions', () => {
    test('dateFromString and dateToString', () => {
        const dateString = '2024-04-25';
        const dateWrapper = (0, utils_1.dateFromString)(dateString);
        const result = (0, utils_1.dateToString)(dateWrapper);
        expect(result).toBe(dateString);
    });
});
describe('datetime conversions', () => {
    test('dateTimeFromString and dateTimeToString', () => {
        const dateTimeString = '2024-04-25T12:30:00+00:00';
        const dateTimeWrapper = (0, utils_1.dateTimeFromString)(dateTimeString);
        const result = (0, utils_1.dateTimeToString)(dateTimeWrapper);
        expect(result).toBe('2024-04-25T12:30:00+00:00');
    });
});
//# sourceMappingURL=utils.test.js.map