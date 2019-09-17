const express = require("express");
const path = require("path");
const art_express = require("express-art-template");

var app = express();

app.engine("art", art_express);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "art");

app.get("/userlist", function(req, res) {
    res.render("userlist.art", {
        user: {
            name: "aui",
            tags: ["art", "template", "nodejs"]
        }
    });
});

app.listen(59999, () => {
    console.log("111.111.1.11:59999/userlist")
})
