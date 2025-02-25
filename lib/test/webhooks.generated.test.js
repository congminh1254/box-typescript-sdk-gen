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
import { dateTimeToString } from '../internal/utils.js';
import { epochSecondsToDateTime } from '../internal/utils.js';
import { getEpochTimeInSeconds } from '../internal/utils.js';
import { computeWebhookSignature } from '../internal/utils.js';
import { WebhooksManager } from '../managers/webhooks.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testWebhooksCRUD', function testWebhooksCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield client.folders.createFolder({
            name: getUuid(),
            parent: { id: '0' },
        });
        const webhook = yield client.webhooks.createWebhook({
            target: {
                id: folder.id,
                type: 'folder',
            },
            address: 'https://example.com/new-webhook',
            triggers: ['FILE.UPLOADED'],
        });
        if (!(webhook.target.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!(toString(webhook.target.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.triggers.length == ['FILE.UPLOADED'].length)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == 'https://example.com/new-webhook')) {
            throw new Error('Assertion failed');
        }
        const webhooks = yield client.webhooks.getWebhooks();
        if (!(webhooks.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const webhookFromApi = yield client.webhooks.getWebhookById(webhook.id);
        if (!(webhook.id == webhookFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.target.id == webhookFromApi.target.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == webhookFromApi.address)) {
            throw new Error('Assertion failed');
        }
        const updatedWebhook = yield client.webhooks.updateWebhookById(webhook.id, {
            requestBody: {
                address: 'https://example.com/updated-webhook',
            },
        });
        if (!(updatedWebhook.id == webhook.id)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedWebhook.address == 'https://example.com/updated-webhook')) {
            throw new Error('Assertion failed');
        }
        yield client.webhooks.deleteWebhookById(webhook.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.webhooks.deleteWebhookById(webhook.id);
        })).rejects.toThrow();
        yield client.folders.deleteFolderById(folder.id);
    });
});
test('testWebhookValidation', function testWebhookValidation() {
    return __awaiter(this, void 0, void 0, function* () {
        const primaryKey = 'SamplePrimaryKey';
        const secondaryKey = 'SampleSecondaryKey';
        const incorrectKey = 'IncorrectKey';
        const body = '{"type":"webhook_event","webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"Test.txt"}}';
        const bodyWithJapanese = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2020-08-05.txt"}}';
        const bodyWithEmoji = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\uD83D\uDE00 2020-08-05.txt"}}';
        const bodyWithCarriageReturn = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"test \\r"}}';
        const headers = {
            ['box-delivery-id']: 'f96bb54b-ee16-4fc5-aa65-8c2d9e5b546f',
            ['box-delivery-timestamp']: '2020-01-01T00:00:00-07:00',
            ['box-signature-algorithm']: 'HmacSHA256',
            ['box-signature-primary']: '6TfeAW3A1PASkgboxxA5yqHNKOwFyMWuEXny/FPD5hI=',
            ['box-signature-secondary']: 'v+1CD1Jdo3muIcbpv5lxxgPglOqMfsNHPV899xWYydo=',
            ['box-signature-version']: '1',
        };
        const headersWithJapanese = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'LV2uCu+5NJtIHrCXDYgZ0v/PP5THGRuegw3RtdnEyuE=',
        });
        const headersWithEmoji = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'xF/SDZosX4le+v4A0Qn59sZhuD1RqY5KRUKzVMSbh0E=',
        });
        const headersWithCarriageReturn = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'SVkbKgy3dEEf2PbbzpNu2lDZS7zZ/aboU7HOZgBGrJk=',
        });
        const currentDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds()));
        const futureDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds() + 1200));
        const pastDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds() - 1200));
        const headersWithCorrectDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: currentDatetime }), primaryKey),
            ['box-signature-secondary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: currentDatetime }), secondaryKey),
        });
        const headersWithJapaneseWithCorrectDatetime = Object.assign(Object.assign({}, headersWithJapanese), {
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: yield computeWebhookSignature(bodyWithJapanese, Object.assign(Object.assign({}, headersWithJapanese), { ['box-delivery-timestamp']: currentDatetime }), primaryKey),
            ['box-signature-secondary']: yield computeWebhookSignature(bodyWithJapanese, Object.assign(Object.assign({}, headersWithJapanese), { ['box-delivery-timestamp']: currentDatetime }), secondaryKey),
        });
        const headersWithFutureDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: futureDatetime,
            ['box-signature-primary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: futureDatetime }), primaryKey),
            ['box-signature-secondary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: futureDatetime }), secondaryKey),
        });
        const headersWithPastDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: pastDatetime,
            ['box-signature-primary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: pastDatetime }), primaryKey),
            ['box-signature-secondary']: yield computeWebhookSignature(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: pastDatetime }), secondaryKey),
        });
        const headersWithWrongSignatureVersion = Object.assign(Object.assign({}, headers), { ['box-signature-version']: '2' });
        const headersWithWrongSignatureAlgorithm = Object.assign(Object.assign({}, headers), { ['box-signature-algorithm']: 'HmacSHA1' });
        if (!((yield computeWebhookSignature(body, headers, primaryKey)) ==
            headers['box-signature-primary'])) {
            throw new Error('Assertion failed');
        }
        if (!((yield computeWebhookSignature(body, headers, secondaryKey)) ==
            headers['box-signature-secondary'])) {
            throw new Error('Assertion failed');
        }
        if (!!((yield computeWebhookSignature(body, headers, incorrectKey)) ==
            headers['box-signature-primary'])) {
            throw new Error('Assertion failed');
        }
        if (!((yield computeWebhookSignature(bodyWithJapanese, headersWithJapanese, primaryKey)) == headersWithJapanese['box-signature-primary'])) {
            throw new Error('Assertion failed');
        }
        if (!((yield computeWebhookSignature(bodyWithEmoji, headersWithEmoji, primaryKey)) == headersWithEmoji['box-signature-primary'])) {
            throw new Error('Assertion failed');
        }
        if (!((yield computeWebhookSignature(bodyWithCarriageReturn, headersWithCarriageReturn, primaryKey)) == headersWithCarriageReturn['box-signature-primary'])) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: incorrectKey })) == false)) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(body, headersWithFutureDatetime, primaryKey, { secondaryKey: secondaryKey })) == false)) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(body, headersWithPastDatetime, primaryKey, { secondaryKey: secondaryKey })) == false)) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(body, headersWithWrongSignatureVersion, primaryKey, { secondaryKey: secondaryKey })) == false)) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(body, headersWithWrongSignatureAlgorithm, primaryKey, { secondaryKey: secondaryKey })) == false)) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!((yield WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapanese, primaryKey, { secondaryKey: secondaryKey })) == false)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=webhooks.generated.test.js.map