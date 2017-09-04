"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keyed_1 = require("./keyed");
function storageBuilder(type) {
    switch (type) {
        case 'long': return new keyed_1.LongStorage;
        case 'short': return new keyed_1.ShortStorage;
        case 'volatile': return new keyed_1.VolatileStorage;
        default: return invalidStorageType(type);
    }
}
exports.storageBuilder = storageBuilder;
function invalidStorageType(type) {
    throw new TypeError(`Unexpected storage type: ${type}`);
}
//# sourceMappingURL=builder.js.map