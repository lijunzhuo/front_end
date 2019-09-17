const fs = require("fs");
const path = require("path");
const Mock = require("mockjs");

const jsondb = require("./db.json");

jsondb.users || (jsondb.users = []);

let data = Mock.mock({
    "user|30": [{
        "id|+1": 10000,
        "name": "@cname",
        "email": "@email",
        "phone": "@natural(17800000000, 17809999999)",
        "address": "@country(true)",
        "zip": "@zip",
        "birthday": "@date('yyyy-mm-dd')",
    }]
});

jsondb.users.push(...data.user);
fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(jsondb), { encoding: "utf8" });

console.log("adding data finished..")