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
jest.mock('node-fetch', () => jest.fn(() => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        text: () => __awaiter(void 0, void 0, void 0, function* () { return ''; }),
        arrayBuffer: () => __awaiter(void 0, void 0, void 0, function* () { return new ArrayBuffer(0); }),
    });
})));
// The fetch method is using NetworkSession, but NetworkSession using BaseUrls
// which is generated during the build process.
// Skip this test for now
test.skip('fetch parses headers correctly and adds analytic headers', () => __awaiter(void 0, void 0, void 0, function* () {
    // The request will fail but we ignore that
    // await expect(
    //   builtInFetch('url', {
    //     params: prepareParams(
    //       Object.fromEntries([
    //         ['key1', toString('value1')],
    //         ['key2', toString(null)],
    //         ['key3', toString('value3')],
    //         ['key4', toString(void 0)],
    //         ['key5', toString(42)],
    //         ['key6', toString(true)],
    //       ])
    //     ),
    //     headers: prepareParams(
    //       Object.fromEntries([
    //         ['key1', toString('value1')],
    //         ['key2', toString(null)],
    //         ['key3', toString('value3')],
    //         ['key4', toString(void 0)],
    //       ])
    //     ),
    //   })
    // ).rejects.toThrow();
    // expect(fetch as jest.Mock).toBeCalledWith(
    //   'url?key1=value1&key3=value3&key5=42&key6=true',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       key1: 'value1',
    //       key3: 'value3',
    //       'User-Agent': userAgentHeader,
    //       'X-Box-UA': xBoxUaHeader,
    //     },
    //   }
    // );
}));
//# sourceMappingURL=fetch.test.js.map