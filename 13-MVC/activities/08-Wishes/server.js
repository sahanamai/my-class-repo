var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "wishes_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function (req, res) {
  connection.query("SELECT * FROM wishes;", function (err, data) {
    if (err) throw err;

    // Test it
    console.log('The wish is: ', data);

    // Test it
    //return res.send(data);

    res.render("index", { wish: data });
  });
});

// Post route -> back to home
app.post("/", function (req,res) {
  //client request enters the server
  //use the information provided on the request object to make things (in the case of a post)

  //req.body.email, req.body.password, req.body.name
//const newUser = {email: req.body.email, etc etc}
//create newUser in the Db --->new User(newUser) 


  //
  // Test it
  console.log('You sent');
  console.log(req.body.wish);

  // Test it
  // return res.send('You sent, ' + req.body.task);
  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO wishes (wish) VALUES (?)",[req.body.wish], function (err, results) {
    if (err) throw err;
    res.redirect("/");
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
