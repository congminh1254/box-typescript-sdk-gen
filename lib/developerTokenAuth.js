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
exports.DeveloperTokenAuth = void 0;
class DeveloperTokenAuth {
    constructor(config) {
        this.token = config.token;
    }
    retrieveToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.token;
        });
    }
    refreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            throw Error('Developer token has expired. Please provide a new one.');
        });
    }
}
exports.DeveloperTokenAuth = DeveloperTokenAuth;
//# sourceMappingURL=developerTokenAuth.js.map