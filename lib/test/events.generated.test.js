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
import { dateTimeFromString } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testEvents', function testEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield client.events.getEvents();
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!(toString(firstEvent.createdBy.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!!(toString(firstEvent.eventType) == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventUpload', function testEventUpload() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield client.events.getEvents({
            streamType: 'admin_logs',
            eventType: ['UPLOAD'],
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!(toString(firstEvent.eventType) == 'UPLOAD')) {
            throw new Error('Assertion failed');
        }
        const source = firstEvent.source;
        if (!(toString(source.itemType) == 'file' ||
            toString(source.itemType) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.itemId == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.itemName == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventDeleteUser', function testEventDeleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield client.events.getEvents({
            streamType: 'admin_logs',
            eventType: ['DELETE_USER'],
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!(toString(firstEvent.eventType) == 'DELETE_USER')) {
            throw new Error('Assertion failed');
        }
        const source = firstEvent.source;
        if (!(toString(source.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventSourceFileOrFolder', function testEventSourceFileOrFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield client.events.getEvents({
            streamType: 'changes',
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        const source = firstEvent.source;
        if (!(toString(source.type) == 'file' ||
            toString(source.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetEventsWithLongPolling', function testGetEventsWithLongPolling() {
    return __awaiter(this, void 0, void 0, function* () {
        const servers = yield client.events.getEventsWithLongPolling();
        if (!(servers.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const server = servers.entries[0];
        if (!(toString(server.type) == 'realtime_server')) {
            throw new Error('Assertion failed');
        }
        if (!!(server.url == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetEventsWithDateFilters', function testGetEventsWithDateFilters() {
    return __awaiter(this, void 0, void 0, function* () {
        const createdAfterDate = dateTimeFromString('2024-06-09T00:00:00Z');
        const createdBeforeDate = dateTimeFromString('2025-06-09T00:00:00Z');
        const servers = yield client.events.getEvents({
            streamType: 'admin_logs',
            limit: 1,
            createdAfter: createdAfterDate,
            createdBefore: createdBeforeDate,
        });
        if (!(servers.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=events.generated.test.js.map