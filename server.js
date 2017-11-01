var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
var port = 8000;
app.use( serveStatic("./src"));
console.log("Serving ./src content on port " + port +". Go to http://localhost:" + port);
app.listen(port);
