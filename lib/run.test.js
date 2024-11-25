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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const run_1 = __importDefault(require("./run"));
test('Uses standard input/output', () => __awaiter(void 0, void 0, void 0, function* () {
    const args = [2, 2];
    process = Object.create(process, {
        stdin: {
            value: stream_1.Readable.from(Buffer.from(JSON.stringify(args), 'utf-8')),
        },
    });
    jest.spyOn(global.console, 'log').mockImplementation();
    yield (0, run_1.default)((a, b) => __awaiter(void 0, void 0, void 0, function* () { return 2 + 2; }));
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith(4);
}));
//# sourceMappingURL=run.test.js.map