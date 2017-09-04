"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryStorage {
    constructor() {
        this.memory = new Map();
    }
    get(key) {
        return this.memory.get(key);
    }
    set(key, value) {
        this.memory.set(key, value);
        return this;
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=memory.storage.js.map