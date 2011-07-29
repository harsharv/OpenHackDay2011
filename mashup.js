/*
    Fetch data from twitter.

    Usage: node mashup.js twitter_tag <count>
*/

var TwitterFeed = require("./twitter.js").TwitterFeed,
    twit, i;

var tag   = "yahoo";
var count = 5;

twit = new TwitterFeed();
twit.on("twit-data", function (data) {
    for (i = 0; i < count; i++) {
        console.log(data.results[i].text);
    }
});

twit.fetchData(tag, count);

