var http   = require("http");
    events = require("events");

function TwitterFeed () {} 

TwitterFeed.prototype = new events.EventEmitter();

TwitterFeed.prototype.fetchData = function (tag, count) {
    var self = this,
    urlPath;
    if (!tag) {
        throw new Error("Expected argument missing");
    }

    if (!count) {
        count = 5;
    }

    urlPath = "/search.json?q=" + escape(tag) + "&result_type=mixed&count=" + count;

    http.get({"host": "search.twitter.com", "port" : 80,
              "path": urlPath}, function(res) {
        
        var buf = "";

        res.on("data", function (chunk) {
            buf += chunk;
        });

        res.on("end", function () {
            self.emit("twit-data", eval("(" + buf  + ")"));
        });
    }).on("error", function (e) {
        self.emit("twit-error", e.message);              
    });
};

exports.TwitterFeed = TwitterFeed;
