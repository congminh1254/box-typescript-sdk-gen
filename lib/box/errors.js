"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxApiError = exports.BoxSdkError = void 0;
class BoxSdkError extends Error {
    constructor(fields) {
        super(fields.message);
        this.name = 'BoxSDKError';
        Object.assign(this, fields);
        this.message = JSON.stringify(fields, undefined, 2);
    }
}
exports.BoxSdkError = BoxSdkError;
class BoxApiError extends BoxSdkError {
    constructor(fields) {
        super(fields);
    }
}
exports.BoxApiError = BoxApiError;
//# sourceMappingURL=errors.js.map