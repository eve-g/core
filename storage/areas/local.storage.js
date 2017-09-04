"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areas_1 = require("./areas");
class LocalStorage extends areas_1.WebStorage {
    constructor() {
        super(...arguments);
        this.windowStorage = window.localStorage;
    }
}
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=local.storage.js.map