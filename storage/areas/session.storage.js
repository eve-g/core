"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areas_1 = require("./areas");
class SessionStorage extends areas_1.WebStorage {
    constructor() {
        super(...arguments);
        this.windowStorage = window.sessionStorage;
    }
}
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=session.storage.js.map