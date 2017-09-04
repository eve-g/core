"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebStorage {
    get(key) {
        const item = this.windowStorage.getItem(key);
        return item ? item : undefined;
    }
    set(key, value) {
        this.windowStorage.setItem(key, value);
        return this;
    }
}
exports.WebStorage = WebStorage;
//# sourceMappingURL=platform.js.map