<<<<<<< HEAD
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "",

    // Your password
    password: "",
    
    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});


// RIGHT JOIN

function foodSearch() {
  // =============== Code Starts Here ===============
  
  
  
  
  
  
  
  
  
  
  
  
  // =============== Code Ends Here ===============
=======
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "",

    // Your password
    password: "",
    
    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});


// RIGHT JOIN

function foodSearch() {
  // =============== Code Starts Here ===============
  
  
  
  
  
  
  
  
  
  
  
  
  // =============== Code Ends Here ===============
>>>>>>> 0388aff80e58424a03cdfefcdc213c9f68f40fd8
  }