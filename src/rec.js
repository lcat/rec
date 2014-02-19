define(function(require, exports, module) {
    var popup = require('popup'),
        $ = require('$');
    var rec = {
        say: function() {
            alert('hello');
        }
    }
    module.exports = rec;
});