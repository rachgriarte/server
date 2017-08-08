var http = require("http");
var PORT = [7000, 7500];

var server1 = http.createServer(function(request, response){
    response.end('it works! + path hit: '+ request.url);
});

server1.listen(PORT[0], function() {
    console.log("You are the smartest person I know!" + 7000);
});

var server2 = http.createServer(function(request, response){
    response.end('it works! + path hit: '+ request.url);
});

server2.listen(7500, function() {
    console.log("you are a terrible human being!") +7500);
})