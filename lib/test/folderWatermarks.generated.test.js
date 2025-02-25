var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UpdateFolderWatermarkRequestBodyWatermarkField } from '../managers/folderWatermarks.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateGetDeleteFolderWatermark', function testCreateGetDeleteFolderWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderName = getUuid();
        const folder = yield client.folders.createFolder({
            name: folderName,
            parent: { id: '0' },
        });
        const createdWatermark = yield client.folderWatermarks.updateFolderWatermark(folder.id, {
            watermark: new UpdateFolderWatermarkRequestBodyWatermarkField({
                imprint: 'default',
            }),
        });
        const watermark = yield client.folderWatermarks.getFolderWatermark(folder.id);
        yield client.folderWatermarks.deleteFolderWatermark(folder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.folderWatermarks.getFolderWatermark(folder.id);
        })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderWatermarks.generated.test.js.map