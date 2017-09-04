"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_storage_1 = require("./areas/local.storage");
const memory_storage_1 = require("./areas/memory.storage");
const session_storage_1 = require("./areas/session.storage");
const facades_1 = require("./facades");
const longMixin = Base => class extends Base {
    area() { return new local_storage_1.LocalStorage; }
};
const shortMixin = Base => class extends Base {
    area() { return new session_storage_1.SessionStorage; }
};
const volatileMixin = Base => class extends Base {
    area() { return new memory_storage_1.MemoryStorage; }
};
class LongStorage extends longMixin(facades_1.BrowserStorage) {
}
exports.LongStorage = LongStorage;
class ShortStorage extends shortMixin(facades_1.BrowserStorage) {
}
exports.ShortStorage = ShortStorage;
class VolatileStorage extends volatileMixin(facades_1.BrowserStorage) {
}
exports.VolatileStorage = VolatileStorage;
//# sourceMappingURL=keyed.js.map