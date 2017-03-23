let crypto = require('crypto');
var methods = {}

methods.hash = function (password, salt) {
    hashPassword = crypto.createHmac('sha256', salt)
        .update('password')
        .digest('hex');

    return hashPassword
}

module.exports = methods
