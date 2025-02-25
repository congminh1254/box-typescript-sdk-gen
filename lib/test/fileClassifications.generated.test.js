var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { UpdateClassificationOnFileRequestBody } from '../managers/fileClassifications.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
export const client = getDefaultClient();
export function getOrCreateSecondClassification(classificationTemplateInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = new ClassificationTemplate({
            id: classificationTemplateInput.id,
            type: classificationTemplateInput.type,
            scope: classificationTemplateInput.scope,
            templateKey: classificationTemplateInput.templateKey,
            displayName: classificationTemplateInput.displayName,
            hidden: classificationTemplateInput.hidden,
            copyInstanceOnItemCopy: classificationTemplateInput.copyInstanceOnItemCopy,
            fields: classificationTemplateInput.fields,
        });
        const classifications = classificationTemplate.fields[0].options;
        const currentNumberOfClassifications = classifications.length;
        if (currentNumberOfClassifications == 1) {
            const classificationTemplateWithNewClassification = yield client.classifications.addClassification([
                new AddClassificationRequestBody({
                    data: {
                        key: getUuid(),
                        staticConfig: {
                            classification: {
                                colorId: 4,
                                classificationDefinition: 'Other description',
                            },
                        },
                    },
                }),
            ]);
            return classificationTemplateWithNewClassification.fields[0].options[1];
        }
        return classifications[1];
    });
}
test('testFileClassifications', function testFileClassifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = yield getOrCreateClassificationTemplate();
        const classification = yield getOrCreateClassification(classificationTemplate);
        const file = yield uploadNewFile();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.fileClassifications.getClassificationOnFile(file.id);
        })).rejects.toThrow();
        const createdFileClassification = yield client.fileClassifications.addClassificationToFile(file.id, {
            requestBody: {
                boxSecurityClassificationKey: classification.key,
            },
        });
        if (!(createdFileClassification.boxSecurityClassificationKey ==
            classification.key)) {
            throw new Error('Assertion failed');
        }
        const fileClassification = yield client.fileClassifications.getClassificationOnFile(file.id);
        if (!(fileClassification.boxSecurityClassificationKey == classification.key)) {
            throw new Error('Assertion failed');
        }
        const secondClassification = yield getOrCreateSecondClassification(classificationTemplate);
        const updatedFileClassification = yield client.fileClassifications.updateClassificationOnFile(file.id, [
            new UpdateClassificationOnFileRequestBody({
                value: secondClassification.key,
            }),
        ]);
        if (!(updatedFileClassification.boxSecurityClassificationKey ==
            secondClassification.key)) {
            throw new Error('Assertion failed');
        }
        yield client.fileClassifications.deleteClassificationFromFile(file.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.fileClassifications.getClassificationOnFile(file.id);
        })).rejects.toThrow();
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileClassifications.generated.test.js.map