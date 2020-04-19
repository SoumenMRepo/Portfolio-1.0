var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("/index.html");
});

app.listen(process.env.PORT || 3000, process.env.IP, function (err) {
  console.log("sever soumen started.");
});
