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
exports.DownloadsManager = void 0;
const fetch_js_1 = require("../fetch.js");
class DownloadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    downloadFile(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/content"), { method: "GET", params: { ["version"]: options.version, ["access_token"]: options.accessToken }, headers: { ["range"]: options.range, ["boxapi"]: options.boxapi }, auth: this.auth });
            return response.content;
        });
    }
}
exports.DownloadsManager = DownloadsManager;
//# sourceMappingURL=downloads.generated.js.map