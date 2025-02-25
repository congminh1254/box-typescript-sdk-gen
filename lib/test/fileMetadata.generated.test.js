var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testGlobalFileMetadata', function testGlobalFileMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const fileMetadata = yield client.fileMetadata.getFileMetadata(file.id);
        if (!(fileMetadata.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const createdMetadata = yield client.fileMetadata.createFileMetadataById(file.id, 'global', 'properties', { ['abc']: 'xyz' });
        if (!(toString(createdMetadata.template) == 'properties')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.scope) == 'global')) {
            throw new Error('Assertion failed');
        }
        if (!(createdMetadata.version == 0)) {
            throw new Error('Assertion failed');
        }
        const receivedMetadata = yield client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        if (!(toString(receivedMetadata.extraData.abc) == 'xyz')) {
            throw new Error('Assertion failed');
        }
        const newValue = 'bar';
        yield client.fileMetadata.updateFileMetadataById(file.id, 'global', 'properties', [
            {
                op: 'replace',
                path: '/abc',
                value: newValue,
            },
        ]);
        const receivedUpdatedMetadata = yield client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        if (!(toString(receivedUpdatedMetadata.extraData.abc) == newValue)) {
            throw new Error('Assertion failed');
        }
        yield client.fileMetadata.deleteFileMetadataById(file.id, 'global', 'properties');
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        })).rejects.toThrow();
        yield client.files.deleteFileById(file.id);
    });
});
test('testEnterpriseFileMetadata', function testEnterpriseFileMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const templateKey = ''.concat('key', getUuid());
        yield client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'name',
                    displayName: 'name',
                },
                {
                    type: 'float',
                    key: 'age',
                    displayName: 'age',
                },
                {
                    type: 'date',
                    key: 'birthDate',
                    displayName: 'birthDate',
                },
                {
                    type: 'enum',
                    key: 'countryCode',
                    displayName: 'countryCode',
                    options: [
                        {
                            key: 'US',
                        },
                        {
                            key: 'CA',
                        },
                    ],
                },
                {
                    type: 'multiSelect',
                    key: 'sports',
                    displayName: 'sports',
                    options: [
                        {
                            key: 'basketball',
                        },
                        {
                            key: 'football',
                        },
                        {
                            key: 'tennis',
                        },
                    ],
                },
            ],
        });
        const createdMetadata = yield client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
            ['name']: 'John',
            ['age']: 23,
            ['birthDate']: '2001-01-03T02:20:50.520Z',
            ['countryCode']: 'US',
            ['sports']: ['basketball', 'tennis'],
        });
        if (!(toString(createdMetadata.template) == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.extraData.name) == 'John')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.extraData.age) == '23')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.extraData.birthDate) ==
            '2001-01-03T02:20:50.520Z')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.extraData.countryCode) == 'US')) {
            throw new Error('Assertion failed');
        }
        const sports = createdMetadata.extraData.sports;
        if (!(sports[0] == 'basketball')) {
            throw new Error('Assertion failed');
        }
        if (!(sports[1] == 'tennis')) {
            throw new Error('Assertion failed');
        }
        yield client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
        yield client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileMetadata.generated.test.js.map