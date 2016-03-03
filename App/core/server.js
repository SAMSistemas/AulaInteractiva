var express = require("express");
var session = require("express-session");
var passport = require('passport');
var morgan = require("morgan");

var server_config = require("./server_config");
var router = require("./router");

/* Server initialization */
var app = express();
var session = session({
	secret: server_config.SESSION_SIGNATURE,
	name: server_config.SESSION_COOKIE_NAME,
	saveUninitialized: true,
	resave: false
});

app.use(morgan("dev"));

app.use(express.static(server_config.STATIC_CONTENT_DIR));

app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);


var server = app.listen(server_config.PORT, function() {
	console.log("Port@ " + server_config.PORT);
	console.log("Static@ " + server_config.STATIC_CONTENT_DIR);
});

var push = require('./push_server')(server, session);


module.exports = app;