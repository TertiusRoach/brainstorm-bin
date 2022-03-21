define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultBody = void 0;
    var DefaultBody;
    (function (DefaultBody) {
        var initiateEvents = (function () {
            function initiateEvents() {
                var indexBody = document.querySelector('#index-body');
                var defaultBody = document.querySelector('.default-body');
                var indexHeader = document.querySelector('#index-header');
                var defaultHeader = document.querySelector('.default-header');
                var indexMain = document.querySelector('#index-main');
                var defaultMain = document.querySelector('.default-main');
                var indexFooter = document.querySelector('#index-footer');
                var defaultFooter = document.querySelector('.default-footer');
                var indexSidebar = document.querySelector('#index-sidebar');
                var defaultSidebar = document.querySelector('.default-sidebar');
                var indexOverlay = document.querySelector('#index-overlay');
                var defaultOverlay = document.querySelector('.default-overlay');
                var indexData = document.querySelector('#index-data');
                var defaultData = document.querySelector('.default-data');
            }
            return initiateEvents;
        }());
        DefaultBody.initiateEvents = initiateEvents;
    })(DefaultBody = exports.DefaultBody || (exports.DefaultBody = {}));
});

//# sourceMappingURL=dist/code/events/indexOverlay/DefaultOverlay.js.map
