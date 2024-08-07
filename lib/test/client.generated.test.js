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
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const baseUrls_generated_js_1 = require("../networking/baseUrls.generated.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testWithAsUserHeader', function testWithAsUserHeader() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const createdUser = yield exports.client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const asUserClient = exports.client.withAsUserHeader(createdUser.id);
        const adminUser = yield exports.client.users.getUserMe();
        if (!!((0, utils_js_2.toString)(adminUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        const appUser = yield asUserClient.users.getUserMe();
        if (!((0, utils_js_2.toString)(appUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(createdUser.id);
    });
});
test('testWithSuppressedNotifications', function testWithSuppressedNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const newClient = exports.client.withSuppressedNotifications();
        const user = yield newClient.users.getUserMe();
        if (!!(user.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testWithExtraHeaders', function testWithExtraHeaders() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0, utils_js_1.getUuid)();
        const createdUser = yield exports.client.users.createUser({
            name: userName,
            isPlatformAccessOnly: true,
        });
        const asUserClient = exports.client.withExtraHeaders({
            ['As-User']: createdUser.id,
        });
        const adminUser = yield exports.client.users.getUserMe();
        if (!!((0, utils_js_2.toString)(adminUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        const appUser = yield asUserClient.users.getUserMe();
        if (!((0, utils_js_2.toString)(appUser.name) == userName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.users.deleteUserById(createdUser.id);
    });
});
test('testWithCustomBaseUrls', function testWithCustomBaseUrls() {
    return __awaiter(this, void 0, void 0, function* () {
        const newBaseUrls = new baseUrls_generated_js_1.BaseUrls({
            baseUrl: 'https://box.com/',
            uploadUrl: 'https://box.com/',
            oauth2Url: 'https://box.com/',
        });
        const customBaseClient = exports.client.withCustomBaseUrls(newBaseUrls);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield customBaseClient.users.getUserMe();
        })).rejects.toThrow();
    });
});
test('testWithInterceptors', function testWithInterceptors() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.getUserMe();
        if (!(user.role == void 0)) {
            throw new Error('Assertion failed');
        }
        function beforeRequest(options) {
            return {
                method: options.method,
                headers: options.headers,
                params: Object.assign(Object.assign({}, options.params), { ['fields']: 'role' }),
                data: options.data,
                fileStream: options.fileStream,
                multipartData: options.multipartData,
                contentType: options.contentType,
                responseFormat: options.responseFormat,
                auth: options.auth,
                networkSession: options.networkSession,
                cancellationToken: options.cancellationToken,
            };
        }
        function emptyAfterRequest(response) {
            return response;
        }
        const clientWithInterceptor = exports.client.withInterceptors([
            {
                beforeRequest: beforeRequest,
                afterRequest: emptyAfterRequest,
            },
        ]);
        const newUser = yield clientWithInterceptor.users.getUserMe();
        if (!!(newUser.role == void 0)) {
            throw new Error('Assertion failed');
        }
        function emptyBeforeRequest(options) {
            return options;
        }
        function afterRequest(response) {
            return {
                status: response.status,
                data: (0, json_js_1.jsonToSerializedData)('{"id": "123", "type": "user"}'),
                content: response.content,
                headers: response.headers,
            };
        }
        const clientWithTwoInterceptors = clientWithInterceptor.withInterceptors([
            {
                beforeRequest: emptyBeforeRequest,
                afterRequest: afterRequest,
            },
        ]);
        const superNewUser = yield clientWithTwoInterceptors.users.getUserMe();
        if (!(superNewUser.id == '123')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testWithFailingInterceptors', function testWithFailingInterceptors() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield exports.client.users.getUserMe();
        if (!!(user.id == void 0)) {
            throw new Error('Assertion failed');
        }
        function emptyBeforeRequest(options) {
            return options;
        }
        function afterRequest(response) {
            return {
                status: 400,
                data: response.data,
                content: response.content,
                headers: response.headers,
            };
        }
        const clientWithInterceptor = exports.client.withInterceptors([
            {
                beforeRequest: emptyBeforeRequest,
                afterRequest: afterRequest,
            },
        ]);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield clientWithInterceptor.users.getUserMe();
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=client.generated.test.js.map