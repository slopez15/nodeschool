var fs = require('fs');

module.exports = function(filePath, extStr, callback) {
    fs.readdir(filePath, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            var elements = [];
            for (var i = 0; i < list.length; i++) {
                var ext = "." + extStr;
                if (list[i].substr(-1 * ext.length, ext.length) === ext) {
                    elements.push(list[i]);
                }
            }
            callback(null, elements);


        }
    });
}