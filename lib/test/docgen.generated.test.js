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
import { DocGenBatchCreateRequestV2025R0DestinationFolderField } from '../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testDocgenBatchAndJobs', function testDocgenBatchAndJobs() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFile = yield uploadNewFile();
        const folder = yield createNewFolder();
        const createdDocgenTemplate = yield client.docgenTemplate.createDocgenTemplateV2025R0({
            file: new FileReferenceV2025R0({ id: uploadedFile.id }),
        });
        const docgenBatch = yield client.docgen.createDocgenBatchV2025R0({
            file: new FileReferenceV2025R0({ id: uploadedFile.id }),
            inputSource: 'api',
            destinationFolder: new DocGenBatchCreateRequestV2025R0DestinationFolderField({
                id: folder.id,
            }),
            outputType: 'pdf',
            documentGenerationData: [
                {
                    generatedFileName: 'test',
                    userInput: { ['abc']: 'xyz' },
                },
            ],
        });
        if (!!(docgenBatch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenBatch.type) == 'docgen_batch')) {
            throw new Error('Assertion failed');
        }
        const docgenBatchJobs = yield client.docgen.getDocgenBatchJobByIdV2025R0(docgenBatch.id);
        if (!(docgenBatchJobs.entries.length >= 1)) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenBatchJobs.entries[0].id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenBatchJobs.entries[0].type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].outputType == 'pdf')) {
            throw new Error('Assertion failed');
        }
        if (!!(toString(docgenBatchJobs.entries[0].status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].templateFile.id == uploadedFile.id)) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].batch.id == docgenBatch.id)) {
            throw new Error('Assertion failed');
        }
        const docgenJobs = yield client.docgen.getDocgenJobsV2025R0();
        if (!(docgenJobs.entries.length >= 1)) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].batch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].createdBy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].enterprise.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].outputType == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].source == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(toString(docgenJobs.entries[0].status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJobs.entries[0].templateFile.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].templateFile.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJobs.entries[0].templateFileVersion.type) ==
            'file_version')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].templateFileVersion.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJobs.entries[0].type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        const docgenJob = yield client.docgen.getDocgenJobByIdV2025R0(docgenJobs.entries[0].id);
        if (!!(docgenJob.batch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.outputType == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(toString(docgenJob.status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJob.templateFile.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.templateFile.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJob.templateFileVersion.type) == 'file_version')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.templateFileVersion.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(docgenJob.type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
        yield client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=docgen.generated.test.js.map