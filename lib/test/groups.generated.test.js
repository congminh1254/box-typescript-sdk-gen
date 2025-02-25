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
export const client = getDefaultClient();
test('test_get_groups', function test_get_groups() {
    return __awaiter(this, void 0, void 0, function* () {
        const groups = yield client.groups.getGroups();
        if (!(groups.totalCount >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_get_delete_group', function test_create_get_delete_group() {
    return __awaiter(this, void 0, void 0, function* () {
        const groupName = getUuid();
        const groupDescription = 'Group description';
        const group = yield client.groups.createGroup({
            name: groupName,
            description: groupDescription,
        });
        if (!(group.name == groupName)) {
            throw new Error('Assertion failed');
        }
        const groupById = yield client.groups.getGroupById(group.id, {
            queryParams: {
                fields: [
                    'id',
                    'name',
                    'description',
                    'group_type',
                ],
            },
        });
        if (!(groupById.id == group.id)) {
            throw new Error('Assertion failed');
        }
        if (!(groupById.description == groupDescription)) {
            throw new Error('Assertion failed');
        }
        const updatedGroupName = getUuid();
        const updatedGroup = yield client.groups.updateGroupById(group.id, {
            requestBody: {
                name: updatedGroupName,
            },
        });
        if (!(updatedGroup.name == updatedGroupName)) {
            throw new Error('Assertion failed');
        }
        yield client.groups.deleteGroupById(group.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.groups.getGroupById(group.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=groups.generated.test.js.map