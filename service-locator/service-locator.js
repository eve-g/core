"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceLocator extends class {
} {
    static load(locator) {
        this.sole = locator;
    }
    static locator() {
        return this.sole;
    }
}
exports.ServiceLocator = ServiceLocator;
//# sourceMappingURL=service-locator.js.map