const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rootRoot!",
  database: "employee_tracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!\n\n\n");
});

module.exports = connection;

// // Use this when you want to END the script!!! Usually this is the last line in our file. It ends the connection. Make sure it's in your code!!! 
// connection.end();