define("yayue/rec/0.0.1/rec-debug", [ "arale/popup/1.1.6/popup-debug", "$-debug", "arale/overlay/1.1.4/overlay-debug", "arale/position/1.0.1/position-debug", "arale/iframe-shim/1.0.2/iframe-shim-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug" ], function(require, exports, module) {
    var popup = require("arale/popup/1.1.6/popup-debug"), $ = require("$-debug");
    var rec = {
        say: function() {
            alert("hello");
        }
    };
    module.exports = rec;
});
