"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageBase {
    constructor() {
        this.length = 0;
    }
    clear() { }
    get(key) { return key ? null : ''; }
    key(index) { return index ? null : ''; }
    remove(key) { key += ''; }
    set(key, data) { data = key + data; }
}
exports.StorageBase = StorageBase;
//# sourceMappingURL=index.js.map