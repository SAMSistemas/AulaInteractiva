var bcrypt = require("bcrypt-nodejs");

var encryption_util = {
	cryptPassword: function(plainText) {
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(plainText, salt);
		return hash;
	},
	comparePassword: function(password, hashedPassword) {
		return bcrypt.compareSync(password, hashedPassword);
	}
};

module.exports = encryption_util;