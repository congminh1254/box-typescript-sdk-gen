var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testShieldInformationBarrierReports', function testShieldInformationBarrierReports() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const barrier = yield getOrCreateShieldInformationBarrier(client, enterpriseId);
        if (!(toString(barrier.status) == 'draft')) {
            throw new Error('Assertion failed');
        }
        if (!(toString(barrier.type) == 'shield_information_barrier')) {
            throw new Error('Assertion failed');
        }
        if (!(barrier.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(barrier.enterprise.type) == 'enterprise')) {
            throw new Error('Assertion failed');
        }
        const barrierId = barrier.id;
        const existingReports = yield client.shieldInformationBarrierReports.getShieldInformationBarrierReports({
            shieldInformationBarrierId: barrierId,
        });
        if (existingReports.entries.length > 0) {
            return void 0;
        }
        const createdReport = yield client.shieldInformationBarrierReports.createShieldInformationBarrierReport({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
        });
        if (!(createdReport.shieldInformationBarrier.shieldInformationBarrier.id ==
            barrierId)) {
            throw new Error('Assertion failed');
        }
        const retrievedReport = yield client.shieldInformationBarrierReports.getShieldInformationBarrierReportById(createdReport.id);
        if (!(retrievedReport.id == createdReport.id)) {
            throw new Error('Assertion failed');
        }
        const retrievedReports = yield client.shieldInformationBarrierReports.getShieldInformationBarrierReports({
            shieldInformationBarrierId: barrierId,
        });
        if (!(retrievedReports.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=shieldInformationBarrierReports.generated.test.js.map