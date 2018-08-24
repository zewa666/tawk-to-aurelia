"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName("./tawk-to")]);
}
exports.configure = configure;
__export(require("./models"));
__export(require("./tawk-to-service"));
__export(require("./tawk-to"));
//# sourceMappingURL=index.js.map