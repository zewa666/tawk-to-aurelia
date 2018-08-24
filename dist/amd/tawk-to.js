var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./models", "./tawk-to-service"], function (require, exports, aurelia_framework_1, models_1, tawk_to_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TawkTo = /** @class */ (function () {
        function TawkTo(service, element) {
            this.service = service;
            this.element = element;
            this.widgetName = "default";
        }
        TawkTo.prototype.attached = function () {
            if (!this.accountId) {
                throw new Error("No accountId provided");
            }
            var remoteScript = document.createElement("script");
            remoteScript.async = true;
            remoteScript.src = "https://embed.tawk.to/" + this.accountId + "/" + this.widgetName;
            remoteScript.charset = "UTF-8";
            remoteScript.setAttribute("crossorigin", "*");
            this.element.appendChild(remoteScript);
        };
        TawkTo.prototype.userDetailsChanged = function (newDetails) {
            if (this.service.api.getStatus) {
                this.service.api.setAttributes({
                    name: newDetails.name,
                    email: newDetails.email,
                    hash: newDetails.hash
                }, function (error) {
                    if (error === "UNAUTHORIZED_API_CALL") {
                        throw new Error("You need to provide a hash along the UserDetails. This has to be calculated from the users email using your API Key (Dashboard -> Property Settings)");
                    }
                });
            }
            else {
                this.service.api.visitor = {
                    name: this.userDetails.name,
                    email: this.userDetails.email
                };
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], TawkTo.prototype, "accountId", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], TawkTo.prototype, "widgetName", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", models_1.UserDetails)
        ], TawkTo.prototype, "userDetails", void 0);
        TawkTo = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.noView,
            __metadata("design:paramtypes", [tawk_to_service_1.TawkToService, Element])
        ], TawkTo);
        return TawkTo;
    }());
    exports.TawkTo = TawkTo;
});
//# sourceMappingURL=tawk-to.js.map