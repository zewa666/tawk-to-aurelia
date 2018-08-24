define(["require", "exports", "aurelia-framework", "./models", "./tawk-to-service", "./tawk-to"], function (require, exports, aurelia_framework_1, models_1, tawk_to_service_1, tawk_to_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([aurelia_framework_1.PLATFORM.moduleName("./tawk-to")]);
    }
    exports.configure = configure;
    __export(models_1);
    __export(tawk_to_service_1);
    __export(tawk_to_1);
});
//# sourceMappingURL=index.js.map