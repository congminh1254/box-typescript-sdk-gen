"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const integrationMappingPartnerItemSlack_generated_js_1 = require("../schemas/integrationMappingPartnerItemSlack.generated.js");
const integrationMappingBoxItemSlack_generated_js_1 = require("../schemas/integrationMappingBoxItemSlack.generated.js");
const folderReference_generated_js_1 = require("../schemas/folderReference.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testSlackIntegrationMappings', function testSlackIntegrationMappings() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const slackOrgId = '1';
        const partnerItemId = '1';
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.createSlackIntegrationMapping({
                partnerItem: new integrationMappingPartnerItemSlack_generated_js_1.IntegrationMappingPartnerItemSlack({
                    id: partnerItemId,
                    slackOrgId: slackOrgId,
                }),
                boxItem: new integrationMappingBoxItemSlack_generated_js_1.IntegrationMappingBoxItemSlack({ id: folder.id }),
            });
        })).rejects.toThrow();
        const integrationMappings = yield userClient.integrationMappings.getSlackIntegrationMapping();
        if (!(integrationMappings.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const integrationMappingId = '123456';
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.updateSlackIntegrationMappingById(integrationMappingId, {
                requestBody: {
                    boxItem: new integrationMappingBoxItemSlack_generated_js_1.IntegrationMappingBoxItemSlack({ id: '1234567' }),
                },
            });
        })).rejects.toThrow();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.deleteSlackIntegrationMappingById(integrationMappingId);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
test('testTeamsIntegrationMappings', function testTeamsIntegrationMappings() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const tenantId = '1';
        const teamId = '2';
        const partnerItemId = '3';
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.createTeamsIntegrationMapping({
                partnerItem: {
                    type: 'channel',
                    id: partnerItemId,
                    tenantId: tenantId,
                    teamId: teamId,
                },
                boxItem: new folderReference_generated_js_1.FolderReference({ id: folder.id }),
            });
        })).rejects.toThrow();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.getTeamsIntegrationMapping();
        })).rejects.toThrow();
        const integrationMappingId = '123456';
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.updateTeamsIntegrationMappingById(integrationMappingId, {
                requestBody: {
                    boxItem: new folderReference_generated_js_1.FolderReference({ id: '1234567' }),
                },
            });
        })).rejects.toThrow();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.deleteTeamsIntegrationMappingById(integrationMappingId);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=integrationMappings.generated.test.js.map