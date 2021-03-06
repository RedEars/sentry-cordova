"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var misc_1 = require("@sentry/utils/misc");
var core_1 = require("@sentry/core");
/** Default Breadcrumbs instrumentations */
var Release = /** @class */ (function () {
    function Release() {
        /**
         * @inheritDoc
         */
        this.name = Release.id;
    }
    /**
     * @inheritDoc
     */
    Release.prototype.setupOnce = function () {
        var _this = this;
        core_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self, window, release;
            return tslib_1.__generator(this, function (_a) {
                self = core_1.getCurrentHub().getIntegration(Release);
                if (!self) {
                    return [2 /*return*/, event];
                }
                window = misc_1.getGlobalObject();
                // __sentry_release & __sentry_dist will be picked up by our native integration.
                // It should live in extra, native will pic it up there and set it in the event.
                if (event.extra && event.extra.__sentry_release && !event.release) {
                    event.release = "" + event.extra.__sentry_release;
                }
                if (event.extra && event.extra.__sentry_dist && !event.dist) {
                    event.dist = "" + event.extra.__sentry_dist;
                }
                release = window.SENTRY_RELEASE && window.SENTRY_RELEASE.id;
                if (release && !event.release) {
                    event.release = release;
                    event.extra = tslib_1.__assign({}, event.extra, { __sentry_release: release });
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    Release.id = 'Release';
    return Release;
}());
exports.Release = Release;
//# sourceMappingURL=release.js.map