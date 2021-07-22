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

// Insert post 1
// app.get('/addpost1', (req, res) => {
//   let post = {first_name:'Yonatan', last_name:'Galkin', username:'yona', email:'harduf@gmail.com', password:'1234', country:'Israel'};
//   let sql = 'INSERT INTO users SET ?';
//   let query = db.query(sql, post, (err, result) => {
//       if(err) throw err;
//       console.log(result);
//       res.send('Post 1 added...');
//   });
// });



app.listen("8080", () => {
  console.log("Server started on port 8080");
});
