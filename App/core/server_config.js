var path = require("path");

/* Server configuration */
var ROOT_DIR = path.resolve(__dirname, "../..");

var server_config = {
	PORT: 9001,
	STATIC_CONTENT_DIR: ROOT_DIR + "/UI",
	ROOT_DIR: ROOT_DIR,
	SESSION_SIGNATURE: "AulaInteractiva@SAMSistemas",
	SESSION_COOKIE_NAME: "_sid"
}

module.exports = server_config;