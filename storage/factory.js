"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
function storageFactory(injectable) {
    let storage = storageBy.get(injectable);
    return storage ? storage : notRegisteredInjectable(injectable);
}
exports.storageFactory = storageFactory;
function storageRegister(injectable, type) {
    const storage = builder_1.storageBuilder(type);
    storageBy.set(injectable, storage);
}
exports.storageRegister = storageRegister;
const storageBy = new WeakMap();
function notRegisteredInjectable(injectable) {
    throw new TypeError(`Unexpected injectable: ${injectable}`);
}
//# sourceMappingURL=factory.js.map