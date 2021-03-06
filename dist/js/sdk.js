"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var browser_1 = require("@sentry/browser");
var core_1 = require("@sentry/core");
var client_1 = require("./client");
var integrations_1 = require("./integrations");
var minimal_1 = require("@sentry/minimal");
function init(options) {
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = tslib_1.__spread(browser_1.defaultIntegrations, [new integrations_1.Cordova(), new integrations_1.Release()]);
    }
    core_1.initAndBind(client_1.CordovaClient, options);
}
exports.init = init;
function setRelease(release) {
    minimal_1.configureScope(function (scope) {
        scope.setExtra('__sentry_release', release);
    });
}
exports.setRelease = setRelease;
function setDist(dist) {
    minimal_1.configureScope(function (scope) {
        scope.setExtra('__sentry_dist', dist);
    });
}
exports.setDist = setDist;
//# sourceMappingURL=sdk.js.map