const express = require("express");
const mysql = require("mysql");
const cors = require('cors'); // learn about cors

const app = express();



app.use(cors());
app.use(express.json())

// Create connection

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password : '1234',
  database : 'dashboardDB'
});

// Connect
db.connect((err) => {
    if(err){
        console.log(err + " Yonatan Connection error");
    } else {
    console.log('MySql Connected...');
}});

app.post("/register", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  const country = req.body.country;
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    
    "INSERT INTO users (fname, lname, username, email, password, country) VALUES (?,?,?,?,?,?)",
    [first, last, user, email, password, country],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    
    "SELECT * FROM users WHERE (email=?) LIMIT 1", [email], 
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          res.send(res.password);
      } 
    }
  );
});


app.listen("8080", () => {
  console.log("Server started on port 8080");
});
