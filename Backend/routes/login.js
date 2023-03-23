const router = require("express").Router();
const con = require("../db");

const databaseName = "Person";
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


router.post('/api/login/', jsonParser, (req, res) => {
    var user = req.body;
    console.log(user);
    var query = "SELECT * FROM person WHERE email = '" + req.body.email + "'";
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        if (result.length === 0) {
            console.log("Empty");
            return res.send("Account doesn't exist");
        }
        user = result[0];
        console.log(user);
        if (result != undefined && result[0].email === req.body.email) {

            var ROLE = result[0].role;
            console.log("Role : " + ROLE);
            res.json({
                user: result[0]
            })
        } else {
            console.log("Wrong password");
            res.send("Wrong Password");
        }
    })

});

module.exports = router;
