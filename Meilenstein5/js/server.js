var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, respone){

    if (request.url == "/favicon.ico")
        return;

    console.log("user connected");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    fs.appendFile("form.txt", query["vorname"] + " " + query["name"] + ", "
        + query["jahr"] + ", " + query["hcoach"] + ", " + query["acoach"] + ", " + query["position"]
        + ", " + query["number"] + "\n");

    respone.writeHead(200, {"Content-Type":"text/plain"});
    respone.end("Sie haben sich erfolgreich auf den Webserver mir der URL 127.0.0.1:1338 verbunden.");
}).listen(1338, "127.0.0.1");