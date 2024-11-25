"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("./json");
test('sdToJson', () => expect((0, json_1.sdToJson)({
    firstName: 'John',
    lastName: 'Smith',
})).toBe('{"firstName":"John","lastName":"Smith"}'));
test('jsonToSerializedData', () => expect((0, json_1.jsonToSerializedData)('{"firstName":"John","lastName":"Smith"}')).toEqual({
    firstName: 'John',
    lastName: 'Smith',
}));
test('isJSON', () => {
    expect((0, json_1.sdIsNumber)(5)).toBe(true);
    expect((0, json_1.sdIsBoolean)(5)).toBe(false);
    expect((0, json_1.sdIsMap)({})).toBe(true);
});
//# sourceMappingURL=json.test.js.map