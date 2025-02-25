var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AiStudioAgentAsk } from '../schemas/aiStudioAgentAsk.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { AiAgentReference } from '../schemas/aiAgentReference.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testAiStudioCRUD', function testAiStudioCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const agentName = getUuid();
        const createdAgent = yield client.aiStudio.createAiAgent({
            name: agentName,
            accessState: 'enabled',
            ask: new AiStudioAgentAsk({
                accessState: 'enabled',
                description: 'desc1',
            }),
        });
        if (!(createdAgent.name == agentName)) {
            throw new Error('Assertion failed');
        }
        const agents = yield client.aiStudio.getAiAgents();
        const numAgents = agents.entries.length;
        if (!(toString(agents.entries[0].type) == 'ai_agent')) {
            throw new Error('Assertion failed');
        }
        const retrievedAgent = yield client.aiStudio.getAiAgentById(createdAgent.id, {
            queryParams: {
                fields: ['ask'],
            },
        });
        if (!(retrievedAgent.name == agentName)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(retrievedAgent.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(retrievedAgent.ask.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!(retrievedAgent.ask.description == 'desc1')) {
            throw new Error('Assertion failed');
        }
        const updatedAgent = yield client.aiStudio.updateAiAgentById(createdAgent.id, {
            name: agentName,
            accessState: 'enabled',
            ask: new AiStudioAgentAsk({
                accessState: 'disabled',
                description: 'desc2',
            }),
        });
        if (!(toString(updatedAgent.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(updatedAgent.ask.accessState) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedAgent.ask.description == 'desc2')) {
            throw new Error('Assertion failed');
        }
        yield client.aiStudio.deleteAiAgentById(createdAgent.id);
        const agentsAfterDelete = yield client.aiStudio.getAiAgents();
        if (!(agentsAfterDelete.entries.length == numAgents - 1)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testUseAIAgentReferenceInAIAsk', function testUseAIAgentReferenceInAIAsk() {
    return __awaiter(this, void 0, void 0, function* () {
        const agentName = getUuid();
        const createdAgent = yield client.aiStudio.createAiAgent({
            name: agentName,
            accessState: 'enabled',
            ask: new AiStudioAgentAsk({
                accessState: 'enabled',
                description: 'desc1',
            }),
        });
        const fileToAsk = yield uploadNewFile();
        const response = yield client.ai.createAiAsk({
            mode: 'single_item_qa',
            prompt: 'which direction sun rises',
            items: [
                {
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'Sun rises in the East',
                },
            ],
            aiAgent: new AiAgentReference({ id: createdAgent.id }),
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        if (!(response.aiAgentInfo.models.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield client.files.deleteFileById(fileToAsk.id);
        yield client.aiStudio.deleteAiAgentById(createdAgent.id);
    });
});
//# sourceMappingURL=aiStudio.generated.test.js.map