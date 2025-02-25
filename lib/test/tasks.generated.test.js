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
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteTask', function testCreateUpdateGetDeleteTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield client.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: { id: '0' },
            },
            file: generateByteStream(10),
        });
        const file = files.entries[0];
        const dateTime = dateTimeFromString('2035-01-01T00:00:00Z');
        const task = yield client.tasks.createTask({
            item: {
                type: 'file',
                id: file.id,
            },
            message: 'test message',
            dueAt: dateTime,
            action: 'review',
            completionRule: 'all_assignees',
        });
        if (!(task.message == 'test message')) {
            throw new Error('Assertion failed');
        }
        if (!(task.item.id == file.id)) {
            throw new Error('Assertion failed');
        }
        if (!(dateTimeToString(task.dueAt) == dateTimeToString(dateTime))) {
            throw new Error('Assertion failed');
        }
        const taskById = yield client.tasks.getTaskById(task.id);
        if (!(taskById.id == task.id)) {
            throw new Error('Assertion failed');
        }
        const taskOnFile = yield client.tasks.getFileTasks(file.id);
        if (!(taskOnFile.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const updatedTask = yield client.tasks.updateTaskById(task.id, {
            requestBody: {
                message: 'updated message',
            },
        });
        if (!(updatedTask.message == 'updated message')) {
            throw new Error('Assertion failed');
        }
        yield client.tasks.deleteTaskById(task.id);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=tasks.generated.test.js.map