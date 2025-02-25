var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CreateTaskAssignmentRequestBodyTaskField } from '../managers/taskAssignments.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { dateTimeFromString } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCreateUpdateGetDeleteTaskAssignment', function testCreateUpdateGetDeleteTaskAssignment() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const date = dateTimeFromString('2035-01-01T00:00:00Z');
        const task = yield client.tasks.createTask({
            item: {
                type: 'file',
                id: file.id,
            },
            message: 'test message',
            dueAt: date,
            action: 'review',
            completionRule: 'all_assignees',
        });
        if (!(task.message == 'test message')) {
            throw new Error('Assertion failed');
        }
        if (!(task.item.id == file.id)) {
            throw new Error('Assertion failed');
        }
        const currentUser = yield client.users.getUserMe();
        const taskAssignment = yield client.taskAssignments.createTaskAssignment({
            task: new CreateTaskAssignmentRequestBodyTaskField({
                type: 'task',
                id: task.id,
            }),
            assignTo: {
                id: currentUser.id,
            },
        });
        if (!(taskAssignment.item.id == file.id)) {
            throw new Error('Assertion failed');
        }
        if (!(taskAssignment.assignedTo.id == currentUser.id)) {
            throw new Error('Assertion failed');
        }
        const taskAssignmentById = yield client.taskAssignments.getTaskAssignmentById(taskAssignment.id);
        if (!(taskAssignmentById.id == taskAssignment.id)) {
            throw new Error('Assertion failed');
        }
        const taskAssignmentsOnTask = yield client.taskAssignments.getTaskAssignments(task.id);
        if (!(taskAssignmentsOnTask.totalCount == 1)) {
            throw new Error('Assertion failed');
        }
        const updatedTaskAssignment = yield client.taskAssignments.updateTaskAssignmentById(taskAssignment.id, {
            requestBody: {
                message: 'updated message',
                resolutionState: 'approved',
            },
        });
        if (!(updatedTaskAssignment.message == 'updated message')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(updatedTaskAssignment.resolutionState) == 'approved')) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.taskAssignments.deleteTaskAssignmentById(taskAssignment.id);
        })).rejects.toThrow();
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=taskAssignments.generated.test.js.map