"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function blur(callback) {
    function bodyClick(event) {
        callback.apply(event.target, arguments);
        document.body.removeEventListener('click', bodyClick);
    }
    document.body.addEventListener('click', bodyClick, true);
}
exports.blur = blur;
//# sourceMappingURL=blur.js.map