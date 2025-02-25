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
import { CreateClassificationTemplateRequestBodyFieldsField } from '../managers/classifications.generated.js';
import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { BoxJwtAuth } from '../box/jwtAuth.generated.js';
import { JwtConfig } from '../box/jwtAuth.generated.js';
import { toString } from '../internal/utils.js';
export function getJwtAuth() {
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    return auth;
}
export function getDefaultClientWithUserSubject(userId) {
    const auth = getJwtAuth();
    const authUser = auth.withUserSubject(userId);
    return new BoxClient({ auth: authUser });
}
export function getDefaultClient() {
    const client = new BoxClient({ auth: getJwtAuth() });
    return client;
}
export function createNewFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const newFolderName = getUuid();
        return yield client.folders.createFolder({
            name: newFolderName,
            parent: { id: '0' },
        });
    });
}
export function uploadNewFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const newFileName = ''.concat(getUuid(), '.pdf');
        const fileContentStream = generateByteStream(1024 * 1024);
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        return uploadedFiles.entries[0];
    });
}
export function getOrCreateTermsOfServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const tos = yield client.termsOfServices.getTermsOfService();
        const numberOfTos = tos.entries.length;
        if (numberOfTos >= 1) {
            const firstTos = tos.entries[0];
            if (toString(firstTos.tosType) == 'managed') {
                return firstTos;
            }
        }
        if (numberOfTos >= 2) {
            const secondTos = tos.entries[1];
            if (toString(secondTos.tosType) == 'managed') {
                return secondTos;
            }
        }
        return yield client.termsOfServices.createTermsOfService({
            status: 'disabled',
            tosType: 'managed',
            text: 'Test TOS',
        });
    });
}
export function getOrCreateClassification(classificationTemplateInput) {
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
        const client = getDefaultClient();
        const classifications = classificationTemplate.fields[0].options;
        const currentNumberOfClassifications = classifications.length;
        if (currentNumberOfClassifications == 0) {
            const classificationTemplateWithNewClassification = yield client.classifications.addClassification([
                new AddClassificationRequestBody({
                    data: {
                        key: getUuid(),
                        staticConfig: {
                            classification: {
                                colorId: 3,
                                classificationDefinition: 'Some description',
                            },
                        },
                    },
                }),
            ]);
            return classificationTemplateWithNewClassification.fields[0].options[0];
        }
        return classifications[0];
    });
}
export function getOrCreateClassificationTemplate() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        try {
            return yield client.classifications.getClassificationTemplate();
        }
        catch (error) {
            return yield client.classifications.createClassificationTemplate({
                fields: [
                    new CreateClassificationTemplateRequestBodyFieldsField({ options: [] }),
                ],
            });
        }
        finally {
        }
    });
}
export function getOrCreateShieldInformationBarrier(clientInput, enterpriseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new BoxClient({
            auth: clientInput.auth,
            networkSession: clientInput.networkSession,
        });
        const barriers = yield client.shieldInformationBarriers.getShieldInformationBarriers();
        const numberOfBarriers = barriers.entries.length;
        if (numberOfBarriers == 0) {
            return yield client.shieldInformationBarriers.createShieldInformationBarrier({
                enterprise: { id: enterpriseId },
            });
        }
        return barriers.entries[numberOfBarriers - 1];
    });
}
//# sourceMappingURL=commons.generated.js.map