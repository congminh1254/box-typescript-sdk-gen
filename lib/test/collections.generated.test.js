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
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollections', function testCollections() {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = yield client.collections.getCollections();
        const favouriteCollection = yield client.collections.getCollectionById(collections.entries[0].id);
        if (!(toString(favouriteCollection.type) == 'collection')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(favouriteCollection.collectionType) == 'favorites')) {
            throw new Error('Assertion failed');
        }
        const collectionItems = yield client.collections.getCollectionItems(favouriteCollection.id);
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        yield client.folders.updateFolderById(folder.id, {
            requestBody: {
                collections: [
                    {
                        id: favouriteCollection.id,
                    },
                ],
            },
        });
        const collectionItemsAfterUpdate = yield client.collections.getCollectionItems(favouriteCollection.id);
        if (!(collectionItemsAfterUpdate.totalCount == collectionItems.totalCount + 1)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.updateFolderById(folder.id, {
            requestBody: { collections: [] },
        });
        const collectionItemsAfterRemove = yield client.collections.getCollectionItems(favouriteCollection.id);
        if (!(collectionItemsAfterRemove.totalCount == collectionItems.totalCount)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=collections.generated.test.js.map