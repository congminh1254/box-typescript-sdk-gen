var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserBase } from '../schemas/userBase.generated.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
test('testShieldInformationBarrierSegmentMembers', function testShieldInformationBarrierSegmentMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
        const enterpriseId = getEnvVar('ENTERPRISE_ID');
        const barrier = yield getOrCreateShieldInformationBarrier(client, enterpriseId);
        const barrierId = barrier.id;
        const segmentName = getUuid();
        const segment = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: segmentName,
        });
        if (!(segment.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        const segmentMember = yield client.shieldInformationBarrierSegmentMembers.createShieldInformationBarrierSegmentMember({
            shieldInformationBarrierSegment: {
                id: segment.id,
                type: 'shield_information_barrier_segment',
            },
            user: new UserBase({ id: getEnvVar('USER_ID') }),
        });
        if (!(segmentMember.user.id == getEnvVar('USER_ID'))) {
            throw new Error('Assertion failed');
        }
        if (!(segmentMember.shieldInformationBarrierSegment.id == segment.id)) {
            throw new Error('Assertion failed');
        }
        const segmentMembers = yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMembers({
            shieldInformationBarrierSegmentId: segment.id,
        });
        if (!(segmentMembers.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const segmentMemberGet = yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
        if (!(segmentMemberGet.id == segmentMember.id)) {
            throw new Error('Assertion failed');
        }
        yield client.shieldInformationBarrierSegmentMembers.deleteShieldInformationBarrierSegmentMemberById(segmentMember.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
        })).rejects.toThrow();
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segment.id);
    });
});
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.test.js.map