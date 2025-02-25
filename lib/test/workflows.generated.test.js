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
import { getEnvVar } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testWorkflows', function testWorkflows() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminClient = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const workflowFolderId = getEnvVar('WORKFLOW_FOLDER_ID');
        const uploadedFiles = yield adminClient.uploads.uploadFile({
            attributes: {
                name: getUuid(),
                parent: {
                    id: workflowFolderId,
                },
            },
            file: generateByteStream(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const workflowFileId = file.id;
        const workflows = yield adminClient.workflows.getWorkflows({
            folderId: workflowFolderId,
        });
        if (!(workflows.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const workflowToRun = workflows.entries[0];
        if (!(toString(workflowToRun.type) == 'workflow')) {
            throw new Error('Assertion failed');
        }
        if (!(workflowToRun.isEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(workflowToRun.flows[0].type) == 'flow')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(workflowToRun.flows[0].trigger.type) == 'trigger')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(workflowToRun.flows[0].trigger.triggerType) ==
            'WORKFLOW_MANUAL_START')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(workflowToRun.flows[0].outcomes[0].actionType) ==
            'delete_file')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(workflowToRun.flows[0].outcomes[0].type) ==
            'outcome')) {
            throw new Error('Assertion failed');
        }
        yield adminClient.workflows.startWorkflow(workflowToRun.id, {
            type: 'workflow_parameters',
            flow: {
                type: 'flow',
                id: workflowToRun.flows[0].id,
            },
            files: [
                {
                    type: 'file',
                    id: workflowFileId,
                },
            ],
            folder: {
                type: 'folder',
                id: workflowFolderId,
            },
        });
    });
});
//# sourceMappingURL=workflows.generated.test.js.map