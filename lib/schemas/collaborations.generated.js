"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollaborationsOrderDirectionField = serializeCollaborationsOrderDirectionField;
exports.deserializeCollaborationsOrderDirectionField = deserializeCollaborationsOrderDirectionField;
exports.serializeCollaborationsOrderField = serializeCollaborationsOrderField;
exports.deserializeCollaborationsOrderField = deserializeCollaborationsOrderField;
exports.serializeCollaborations = serializeCollaborations;
exports.deserializeCollaborations = deserializeCollaborations;
const collaboration_generated_js_1 = require("./collaboration.generated.js");
const collaboration_generated_js_2 = require("./collaboration.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeCollaborationsOrderDirectionField(val) {
    return val;
}
function deserializeCollaborationsOrderDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationsOrderDirectionField",
    });
}
function serializeCollaborationsOrderField(val) {
    return {
        ['by']: val.by == void 0 ? void 0 : val.by,
        ['direction']: val.direction == void 0
            ? void 0
            : serializeCollaborationsOrderDirectionField(val.direction),
    };
}
function deserializeCollaborationsOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationsOrderField"',
        });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "CollaborationsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeCollaborationsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeCollaborations(val) {
    return {
        ['limit']: val.limit == void 0 ? void 0 : val.limit,
        ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
        ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
        ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
        ['offset']: val.offset == void 0 ? void 0 : val.offset,
        ['order']: val.order == void 0
            ? void 0
            : val.order.map(function (item) {
                return serializeCollaborationsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? void 0
            : val.entries.map(function (item) {
                return (0, collaboration_generated_js_1.serializeCollaboration)(item);
            }),
    };
}
function deserializeCollaborations(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Collaborations"' });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "Collaborations"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "Collaborations"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "Collaborations"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "Collaborations"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "Collaborations"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "Collaborations"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeCollaborationsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Collaborations"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, collaboration_generated_js_2.deserializeCollaboration)(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        totalCount: totalCount,
        offset: offset,
        order: order,
        entries: entries,
    };
}
//# sourceMappingURL=collaborations.generated.js.map