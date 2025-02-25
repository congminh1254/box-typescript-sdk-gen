var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UpdateClassificationRequestBody } from '../managers/classifications.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
export const client = getDefaultClient();
test('testClassifications', function testClassifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = yield getOrCreateClassificationTemplate();
        const classification = yield getOrCreateClassification(classificationTemplate);
        if (!!(classification.key == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(classification.staticConfig.classification.colorId == 100)) {
            throw new Error('Assertion failed');
        }
        if (!!(classification.staticConfig.classification.classificationDefinition ==
            '')) {
            throw new Error('Assertion failed');
        }
        const updatedClassificationName = getUuid();
        const updatedClassificationDescription = getUuid();
        const classificationTemplateWithUpdatedClassification = yield client.classifications.updateClassification([
            new UpdateClassificationRequestBody({
                enumOptionKey: classification.key,
                data: {
                    key: updatedClassificationName,
                    staticConfig: {
                        classification: {
                            colorId: 2,
                            classificationDefinition: updatedClassificationDescription,
                        },
                    },
                },
            }),
        ]);
        const updatedClassifications = classificationTemplateWithUpdatedClassification.fields[0].options;
        const updatedClassification = updatedClassifications[0];
        if (!(updatedClassification.key == updatedClassificationName)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedClassification.staticConfig.classification.colorId == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedClassification.staticConfig.classification
            .classificationDefinition == updatedClassificationDescription)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=classifications.generated.test.js.map