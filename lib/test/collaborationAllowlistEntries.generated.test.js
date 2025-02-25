var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDefaultClient } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollaborationAllowlistEntries', function testCollaborationAllowlistEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const allowlist = yield client.collaborationAllowlistEntries.getCollaborationWhitelistEntries();
        if (!(allowlist.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const domain = ''.concat(getUuid(), 'example.com');
        const newEntry = yield client.collaborationAllowlistEntries.createCollaborationWhitelistEntry({
            direction: 'inbound',
            domain: domain,
        });
        if (!(toString(newEntry.type) == 'collaboration_whitelist_entry')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(newEntry.direction) == 'inbound')) {
            throw new Error('Assertion failed');
        }
        if (!(newEntry.domain == domain)) {
            throw new Error('Assertion failed');
        }
        const entry = yield client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(newEntry.id);
        if (!(entry.id == newEntry.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(entry.direction) ==
            toString(newEntry.direction))) {
            throw new Error('Assertion failed');
        }
        if (!(entry.domain == domain)) {
            throw new Error('Assertion failed');
        }
        yield client.collaborationAllowlistEntries.deleteCollaborationWhitelistEntryById(entry.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(entry.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=collaborationAllowlistEntries.generated.test.js.map