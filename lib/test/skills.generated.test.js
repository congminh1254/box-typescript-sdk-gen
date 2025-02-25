var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { KeywordSkillCardSkillField } from '../schemas/keywordSkillCard.generated.js';
import { KeywordSkillCardInvocationField } from '../schemas/keywordSkillCard.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { KeywordSkillCard } from '../schemas/keywordSkillCard.generated.js';
export const client = getDefaultClient();
test('test_skills_cards_CRUD', function test_skills_cards_CRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield uploadNewFile();
        const skillId = getUuid();
        const invocationId = getUuid();
        const titleMessage = 'License Plates';
        const skillCardsMetadata = yield client.skills.createBoxSkillCardsOnFile(file.id, {
            cards: [
                {
                    type: 'skill_card',
                    skillCardType: 'keyword',
                    skillCardTitle: { code: 'license-plates', message: titleMessage },
                    skill: { id: skillId, type: 'service' },
                    invocation: { id: invocationId, type: 'skill_invocation' },
                    entries: [{ text: 'DN86 BOX' }],
                },
            ],
        });
        if (!(skillCardsMetadata.cards.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(skillCardsMetadata.cards[0].skill.id == skillId)) {
            throw new Error('Assertion failed');
        }
        if (!(skillCardsMetadata.cards[0].skillCardTitle.message == titleMessage)) {
            throw new Error('Assertion failed');
        }
        const updatedTitleMessage = 'Updated License Plates';
        const updatedSkillCardsMetadata = yield client.skills.updateBoxSkillCardsOnFile(file.id, [
            {
                op: 'replace',
                path: '/cards/0',
                value: new KeywordSkillCard({
                    type: 'skill_card',
                    skillCardType: 'keyword',
                    skillCardTitle: {
                        code: 'license-plates',
                        message: updatedTitleMessage,
                    },
                    skill: new KeywordSkillCardSkillField({
                        id: skillId,
                        type: 'service',
                    }),
                    invocation: new KeywordSkillCardInvocationField({
                        id: invocationId,
                        type: 'skill_invocation',
                    }),
                    entries: [
                        { text: 'DN86 BOX' },
                    ],
                }),
            },
        ]);
        if (!(updatedSkillCardsMetadata.cards[0].skill.id == skillId)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedSkillCardsMetadata.cards[0].skillCardTitle.message ==
            updatedTitleMessage)) {
            throw new Error('Assertion failed');
        }
        const receivedSkillCardsMetadata = yield client.skills.getBoxSkillCardsOnFile(file.id);
        if (!(updatedSkillCardsMetadata.cards[0].skill.id == skillId)) {
            throw new Error('Assertion failed');
        }
        yield client.skills.deleteBoxSkillCardsFromFile(file.id);
        yield client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=skills.generated.test.js.map