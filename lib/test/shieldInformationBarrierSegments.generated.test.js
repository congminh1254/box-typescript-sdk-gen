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
import { getUuid } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testShieldInformationBarrierSegments', function testShieldInformationBarrierSegments() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const barrier = yield getOrCreateShieldInformationBarrier(client, enterpriseId);
        const barrierId = barrier.id;
        const segmentName = getUuid();
        const segmentDescription = 'barrier segment description';
        const segment = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: segmentName,
            description: segmentDescription,
        });
        if (!(segment.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        const segments = yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegments({
            shieldInformationBarrierId: barrierId,
        });
        if (!(segments.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const segmentId = segment.id;
        const segmentFromApi = yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
        if (!(toString(segmentFromApi.type) ==
            'shield_information_barrier_segment')) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.id == segmentId)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.description == segmentDescription)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.shieldInformationBarrier.id == barrierId)) {
            throw new Error('Assertion failed');
        }
        const updatedSegmentDescription = 'updated barrier segment description';
        const updatedSegment = yield client.shieldInformationBarrierSegments.updateShieldInformationBarrierSegmentById(segmentId, {
            requestBody: {
                description: updatedSegmentDescription,
            },
        });
        if (!(updatedSegment.description == updatedSegmentDescription)) {
            throw new Error('Assertion failed');
        }
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=shieldInformationBarrierSegments.generated.test.js.map