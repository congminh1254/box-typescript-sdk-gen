"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorVariable = exports.CollaboratorVariableVariableValueField = void 0;
exports.serializeCollaboratorVariableTypeField = serializeCollaboratorVariableTypeField;
exports.deserializeCollaboratorVariableTypeField = deserializeCollaboratorVariableTypeField;
exports.serializeCollaboratorVariableVariableTypeField = serializeCollaboratorVariableVariableTypeField;
exports.deserializeCollaboratorVariableVariableTypeField = deserializeCollaboratorVariableVariableTypeField;
exports.serializeCollaboratorVariableVariableValueTypeField = serializeCollaboratorVariableVariableValueTypeField;
exports.deserializeCollaboratorVariableVariableValueTypeField = deserializeCollaboratorVariableVariableValueTypeField;
exports.serializeCollaboratorVariableVariableValueField = serializeCollaboratorVariableVariableValueField;
exports.deserializeCollaboratorVariableVariableValueField = deserializeCollaboratorVariableVariableValueField;
exports.serializeCollaboratorVariableVariableValueFieldInput = serializeCollaboratorVariableVariableValueFieldInput;
exports.deserializeCollaboratorVariableVariableValueFieldInput = deserializeCollaboratorVariableVariableValueFieldInput;
exports.serializeCollaboratorVariable = serializeCollaboratorVariable;
exports.deserializeCollaboratorVariable = deserializeCollaboratorVariable;
exports.serializeCollaboratorVariableInput = serializeCollaboratorVariableInput;
exports.deserializeCollaboratorVariableInput = deserializeCollaboratorVariableInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class CollaboratorVariableVariableValueField {
    constructor(fields) {
        this.type = 'user';
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.id) {
            this.id = fields.id;
        }
    }
}
exports.CollaboratorVariableVariableValueField = CollaboratorVariableVariableValueField;
class CollaboratorVariable {
    constructor(fields) {
        this.type = 'variable';
        this.variableType = 'user_list';
        if (fields.type) {
            this.type = fields.type;
        }
        if (fields.variableType) {
            this.variableType = fields.variableType;
        }
        if (fields.variableValue) {
            this.variableValue = fields.variableValue;
        }
    }
}
exports.CollaboratorVariable = CollaboratorVariable;
function serializeCollaboratorVariableTypeField(val) {
    return val;
}
function deserializeCollaboratorVariableTypeField(val) {
    if (val == 'variable') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaboratorVariableTypeField",
    });
}
function serializeCollaboratorVariableVariableTypeField(val) {
    return val;
}
function deserializeCollaboratorVariableVariableTypeField(val) {
    if (val == 'user_list') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaboratorVariableVariableTypeField",
    });
}
function serializeCollaboratorVariableVariableValueTypeField(val) {
    return val;
}
function deserializeCollaboratorVariableVariableValueTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaboratorVariableVariableValueTypeField",
    });
}
function serializeCollaboratorVariableVariableValueField(val) {
    return {
        ['type']: serializeCollaboratorVariableVariableValueTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCollaboratorVariableVariableValueField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableVariableValueField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CollaboratorVariableVariableValueField" to be defined',
        });
    }
    const type = deserializeCollaboratorVariableVariableValueTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CollaboratorVariableVariableValueField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaboratorVariableVariableValueField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCollaboratorVariableVariableValueFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeCollaboratorVariableVariableValueTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCollaboratorVariableVariableValueFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableVariableValueFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCollaboratorVariableVariableValueTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CollaboratorVariableVariableValueFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaboratorVariableVariableValueFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCollaboratorVariable(val) {
    return {
        ['type']: serializeCollaboratorVariableTypeField(val.type),
        ['variable_type']: serializeCollaboratorVariableVariableTypeField(val.variableType),
        ['variable_value']: val.variableValue.map(function (item) {
            return serializeCollaboratorVariableVariableValueField(item);
        }),
    };
}
function deserializeCollaboratorVariable(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariable"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CollaboratorVariable" to be defined',
        });
    }
    const type = deserializeCollaboratorVariableTypeField(val.type);
    if (val.variable_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "variable_type" of type "CollaboratorVariable" to be defined',
        });
    }
    const variableType = deserializeCollaboratorVariableVariableTypeField(val.variable_type);
    if (val.variable_value == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "variable_value" of type "CollaboratorVariable" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.variable_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "variable_value" of type "CollaboratorVariable"',
        });
    }
    const variableValue = (0, json_js_2.sdIsList)(val.variable_value)
        ? val.variable_value.map(function (itm) {
            return deserializeCollaboratorVariableVariableValueField(itm);
        })
        : [];
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
function serializeCollaboratorVariableInput(val) {
    return {
        ['type']: val.type == void 0
            ? void 0
            : serializeCollaboratorVariableTypeField(val.type),
        ['variableType']: val.variableType == void 0
            ? void 0
            : serializeCollaboratorVariableVariableTypeField(val.variableType),
        ['variable_value']: val.variableValue.map(function (item) {
            return serializeCollaboratorVariableVariableValueField(item);
        }),
    };
}
function deserializeCollaboratorVariableInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCollaboratorVariableTypeField(val.type);
    const variableType = val.variableType == void 0
        ? void 0
        : deserializeCollaboratorVariableVariableTypeField(val.variableType);
    if (val.variable_value == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "variable_value" of type "CollaboratorVariableInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.variable_value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "variable_value" of type "CollaboratorVariableInput"',
        });
    }
    const variableValue = (0, json_js_2.sdIsList)(val.variable_value)
        ? val.variable_value.map(function (itm) {
            return deserializeCollaboratorVariableVariableValueField(itm);
        })
        : [];
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
//# sourceMappingURL=collaboratorVariable.generated.js.map