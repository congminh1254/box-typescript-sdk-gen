var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FolderMini } from '../schemas/folderMini.generated.js';
import { FileBase } from '../schemas/fileBase.generated.js';
import { getUuid } from '../internal/utils.js';
import { dateFromString } from '../internal/utils.js';
import { dateToString } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateGetCancelAndListSignRequest', function testCreateGetCancelAndListSignRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const signerEmail = ''.concat(getUuid(), '@box.com');
        const fileToSign = yield uploadNewFile();
        const destinationFolder = yield createNewFolder();
        const createdSignRequest = yield client.signRequests.createSignRequest({
            signers: [
                {
                    email: signerEmail,
                    suppressNotifications: true,
                    declinedRedirectUrl: 'https://www.box.com',
                    embedUrlExternalUserId: '123',
                    isInPerson: false,
                    loginRequired: false,
                    password: 'password',
                    role: 'signer',
                },
            ],
            areRemindersEnabled: true,
            areTextSignaturesEnabled: true,
            daysValid: 30,
            declinedRedirectUrl: 'https://www.box.com',
            emailMessage: 'Please sign this document',
            emailSubject: 'Sign this document',
            externalId: '123',
            externalSystemName: 'BoxSignIntegration',
            isDocumentPreparationNeeded: false,
            name: 'Sign Request',
            parentFolder: new FolderMini({ id: destinationFolder.id }),
            redirectUrl: 'https://www.box.com',
            prefillTags: [
                {
                    dateValue: dateFromString('2035-01-01'),
                    documentTagId: '0',
                },
            ],
            sourceFiles: [new FileBase({ id: fileToSign.id })],
        });
        if (!(createdSignRequest.areRemindersEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.areTextSignaturesEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.daysValid == 30)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.declinedRedirectUrl == 'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.emailMessage == 'Please sign this document')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.emailSubject == 'Sign this document')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.externalId == '123')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.externalSystemName == 'BoxSignIntegration')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.isDocumentPreparationNeeded == false)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.name == 'Sign Request.pdf')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.redirectUrl == 'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signFiles.files[0].name == createdSignRequest.name)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].email == signerEmail)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].suppressNotifications == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].declinedRedirectUrl ==
            'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].embedUrlExternalUserId == '123')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].isInPerson == false)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].loginRequired == false)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdSignRequest.signers[1].role) == 'signer')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.parentFolder.id == destinationFolder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(dateToString(createdSignRequest.prefillTags[0].dateValue) ==
            '2035-01-01')) {
            throw new Error('Assertion failed');
        }
        const newSignRequest = yield client.signRequests.getSignRequestById(createdSignRequest.id);
        if (!(newSignRequest.signFiles.files[0].name == createdSignRequest.name)) {
            throw new Error('Assertion failed');
        }
        if (!(newSignRequest.signers[1].email == signerEmail)) {
            throw new Error('Assertion failed');
        }
        if (!(newSignRequest.parentFolder.id == destinationFolder.id)) {
            throw new Error('Assertion failed');
        }
        const cancelledSignRequest = yield client.signRequests.cancelSignRequest(createdSignRequest.id);
        if (!(toString(cancelledSignRequest.status) == 'cancelled')) {
            throw new Error('Assertion failed');
        }
        const signRequests = yield client.signRequests.getSignRequests();
        if (!(toString(signRequests.entries[0].type) == 'sign-request')) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(destinationFolder.id, {
            queryParams: { recursive: true },
        });
        yield client.files.deleteFileById(fileToSign.id);
    });
});
test('testCreateSignRequestWithSignerGroupId', function testCreateSignRequestWithSignerGroupId() {
    return __awaiter(this, void 0, void 0, function* () {
        const signer1Email = ''.concat(getUuid(), '@box.com');
        const signer2Email = ''.concat(getUuid(), '@box.com');
        const fileToSign = yield uploadNewFile();
        const destinationFolder = yield createNewFolder();
        const createdSignRequest = yield client.signRequests.createSignRequest({
            signers: [
                {
                    email: signer1Email,
                    signerGroupId: 'user',
                },
                {
                    email: signer2Email,
                    signerGroupId: 'user',
                },
            ],
            parentFolder: new FolderMini({ id: destinationFolder.id }),
            sourceFiles: [new FileBase({ id: fileToSign.id })],
        });
        if (!(createdSignRequest.signers.length == 3)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdSignRequest.signers[1].signerGroupId == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].signerGroupId ==
            createdSignRequest.signers[2].signerGroupId)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(destinationFolder.id, {
            queryParams: { recursive: true },
        });
        yield client.files.deleteFileById(fileToSign.id);
    });
});
//# sourceMappingURL=signRequests.generated.test.js.map