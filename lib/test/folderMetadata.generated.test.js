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
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testGlobalFolderMetadata', function testGlobalFolderMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield createNewFolder();
        const folderMetadata = yield client.folderMetadata.getFolderMetadata(folder.id);
        if (!(folderMetadata.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const createdMetadata = yield client.folderMetadata.createFolderMetadataById(folder.id, 'global', 'properties', { ['abc']: 'xyz' });
        if (!(toString(createdMetadata.template) == 'properties')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(createdMetadata.scope) == 'global')) {
            throw new Error('Assertion failed');
        }
        if (!(createdMetadata.version == 0)) {
            throw new Error('Assertion failed');
        }
        const receivedMetadata = yield client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
        if (!(toString(receivedMetadata.extraData.abc) == 'xyz')) {
            throw new Error('Assertion failed');
        }
        const newValue = 'bar';
        yield client.folderMetadata.updateFolderMetadataById(folder.id, 'global', 'properties', [
            {
                op: 'replace',
                path: '/abc',
                value: newValue,
            },
        ]);
        const receivedUpdatedMetadata = yield client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
        if (!(toString(receivedUpdatedMetadata.extraData.abc) == newValue)) {
            throw new Error('Assertion failed');
        }
        yield client.folderMetadata.deleteFolderMetadataById(folder.id, 'global', 'properties');
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.folderMetadata.getFolderMetadataById(folder.id, 'global', 'properties');
        })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
    });
});
test('testEnterpriseFolderMetadata', function testEnterpriseFolderMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield createNewFolder();
        const templateKey = ''.concat('key', getUuid());
        const template = yield client.metadataTemplates.createMetadataTemplate({
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
        const createdMetadata = yield client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, {
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
        yield client.folderMetadata.deleteFolderMetadataById(folder.id, 'enterprise', templateKey);
        yield client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderMetadata.generated.test.js.map