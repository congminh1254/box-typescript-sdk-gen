var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FileReferenceV2025R0 } from '../schemas/v2025R0/fileReferenceV2025R0.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
export const client = getDefaultClient();
test('testDocgenTemplateCRUD', function testDocgenTemplateCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const createdDocgenTemplate = yield client.docgenTemplate.createDocgenTemplateV2025R0({
            file: new FileReferenceV2025R0({ id: file.id }),
        });
        const docgenTemplates = yield client.docgenTemplate.getDocgenTemplatesV2025R0();
        if (!(docgenTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const fetchedDocgenTemplate = yield client.docgenTemplate.getDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
        if (!(fetchedDocgenTemplate.file.id == createdDocgenTemplate.file.id)) {
            throw new Error('Assertion failed');
        }
        const docgenTemplateTags = yield client.docgenTemplate.getDocgenTemplateTagsV2025R0(fetchedDocgenTemplate.file.id);
        const docgenTemplateJobs = yield client.docgenTemplate.getDocgenTemplateJobByIdV2025R0(fetchedDocgenTemplate.file.id);
        if (!(docgenTemplateJobs.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield client.docgenTemplate.deleteDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=docgenTemplate.generated.test.js.map