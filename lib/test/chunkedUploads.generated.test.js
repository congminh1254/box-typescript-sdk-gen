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
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testChunkedUpload', function testChunkedUpload() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 20 * 1024 * 1024;
        const fileByteStream = (0, utils_js_2.generateByteStream)(fileSize);
        const fileName = (0, utils_js_1.getUuid)();
        const parentFolderId = '0';
        const uploadedFile = yield exports.client.chunkedUploads.uploadBigFile(fileByteStream, fileName, fileSize, parentFolderId);
        if (!(uploadedFile.name == fileName)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadedFile.size == fileSize)) {
            throw new Error('Assertion failed');
        }
        if (!(uploadedFile.parent.id == parentFolderId)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=chunkedUploads.generated.test.js.map