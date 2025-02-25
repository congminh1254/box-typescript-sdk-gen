var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IntegrationMappingPartnerItemSlack } from '../schemas/integrationMappingPartnerItemSlack.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
export const client = getDefaultClient();
test('testIntegrationMappings', function testIntegrationMappings() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        const slackOrgId = '1';
        const partnerItemId = '1';
        const userId = getEnvVar('USER_ID');
        const userClient = getDefaultClientWithUserSubject(userId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.createSlackIntegrationMapping({
                partnerItem: new IntegrationMappingPartnerItemSlack({
                    id: partnerItemId,
                    slackOrgId: slackOrgId,
                }),
                boxItem: new IntegrationMappingBoxItemSlack({ id: folder.id }),
            });
        })).rejects.toThrow();
        const integrationMappings = yield userClient.integrationMappings.getSlackIntegrationMapping();
        if (!(integrationMappings.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=integrationMappings.generated.test.js.map