import { GeneratedCodeError } from '../internal/errors.js';
export class BoxSdkError extends GeneratedCodeError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxSdkError';
        Object.setPrototypeOf(this, BoxSdkError.prototype);
    }
}
export class BoxApiError extends BoxSdkError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxApiError';
        Object.setPrototypeOf(this, BoxApiError.prototype);
    }
}
//# sourceMappingURL=errors.js.map