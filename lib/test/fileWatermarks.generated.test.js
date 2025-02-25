var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UpdateFileWatermarkRequestBodyWatermarkField } from '../managers/fileWatermarks.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateGetDeleteFileWatermark', function testCreateGetDeleteFileWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileName = ''.concat(getUuid(), '.txt');
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: generateByteStream(10),
        });
        const file = uploadedFiles.entries[0];
        const createdWatermark = yield client.fileWatermarks.updateFileWatermark(file.id, {
            watermark: new UpdateFileWatermarkRequestBodyWatermarkField({
                imprint: 'default',
            }),
        });
        const watermark = yield client.fileWatermarks.getFileWatermark(file.id);
        yield client.fileWatermarks.deleteFileWatermark(file.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.fileWatermarks.getFileWatermark(file.id);
        })).rejects.toThrow();
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileWatermarks.generated.test.js.map