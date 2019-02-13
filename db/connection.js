const mysql = require("mysql");
require("dotenv").config();
let db;

if(process.env.JAWSDB_URL){
  db = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.dbPassword,
    database: "burger_db"
  });
}

db.connect(function(error){
  if(error){
    throw error;
  }
  console.log("connected");
});

module.exports = db;