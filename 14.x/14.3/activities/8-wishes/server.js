var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// allows to extend app, add func that sits between req an end user code, when looked at req.db, extending app thorugh middleware to do different things

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// creating engine called handlebars
// then setting variable, view-engine, setting it ot the handlebars engine, "asked render, what do I use?"

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wish_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//creating mysql connection, from here to top, can copy paste, change db, most part can copy/paste, save as starting template

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM wishes;", function(err, data) {
    if (err) throw err;

    // Test it
    // console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { wishes: data });
  });
  // render method part of express!!
  // views and layouts, express does middle stuff like layouts/rendres, handlebars really just takes string with curly braces, replaces data
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
