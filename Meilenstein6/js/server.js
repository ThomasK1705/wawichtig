var http = require("http");
var url = require("url");
var fs = require("fs");
var path =  require("path");
var express = require("express");
var parser = require("body/json");
var app = express();

app.use(express.static(path.join(__dirname, "../")));
// Body parser use!

app.get("/AllPlayers", function(req, res) {
    fs.readFile("data.json", function(err, data) {
        res.end(data);
    })
});

app.get("/Favorites", function(reg, res ){
    fs.readFile("data.json", function(err, data) {
        var playerArray = JSON.parse(data);
        for (var i = 0; i < playerArray.length; ++i) {
            if(playerArray[i].isFavorite == false)
                playerArray.splice(i--,1);
        }
        res.end(JSON.stringify(playerArray));
    });
});

app.put("/Player", function(req) {
    parser(req, function(err, body) {
        fs.appendFile("form.txt", body.vorname + " " + body.name + ", "
            + body.jahr + ", " + body.hcoach + ", " + body.acoach + ", " + body.position
            + ", " + body.number + "\n");
    });
});

app.listen(1338);