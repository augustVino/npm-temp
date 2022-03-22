(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('path')) :
    typeof define === 'function' && define.amd ? define(['exports', 'path'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vino = {}, global.path));
})(this, (function (exports, path) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

    var sum = function (a, b) {
        return a + b;
    };
    var minus = function (a, b) {
        return a - b;
    };
    var getPath = function () {
        return path__default["default"].resolve(__dirname, 'src');
    };

    exports.getPath = getPath;
    exports.minus = minus;
    exports.sum = sum;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

if(typeof window !== 'undefined') {
  window._Vino_VERSION_ = '1.0.0'
}
