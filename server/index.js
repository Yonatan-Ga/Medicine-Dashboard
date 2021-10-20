const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); // learn about cors
const cookieParser = require("cookie-parser"); // ??? is it worth something???
const bcrypt = require("bcryptjs");
const app = express();

app.use(cors());
app.use(cookieParser());  // ??? is it worth something???
app.use(express.json());

// Create connection

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "dashboardDB",
});

// Connect
db.connect((err) => {
  if (err) {
    console.log(err + " Connection error");
  } else {
    console.log("MySql Connected...");
  }
});

app.post("/register", (req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  const country = req.body.country;
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  const created = req.body.created;  // Couldn't find the way to create this automatically in the DB
  const timezone = req.body.timezone;
  const os = req.body.os;

  db.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",  // add- if there is no DB- create one.
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length > 0) {
        console.log(result)
        res.send("Email is already used. Please choose another or log in.");
      } else {
        db.query(
          "SELECT * FROM users WHERE username = ? LIMIT 1",
          [user],
          (err, result) => {
            if (err) {
              console.log(err);
            } else if (result.length > 0) {
              console.log(result)
              res.send("Username is already used. Please choose another or log in.");
            } else {
              db.query(
                "INSERT INTO users (fname, lname, username, email, created, timezone, os, password, country) VALUES (?,?,?,?,?,?,?,?,?)",
                [first, last, user, email, created,  timezone, os, password, country],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send("Success");
                  }
                }
              );
            }
          }
        );
      }
    }
  )
});

app.post("/login", (req, response) => {
  const email = req.body.email;
  const password = req.body.password; // not sure if it's ok to pass the password unhashed to backend...?
  if (email && password) {
    db.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else if (result.length > 0) {
          const hash = result[0].password;
          bcrypt.compare(password, hash, (err, res) => {
            if (!err && res) {
              console.log(result);
              response.send(result);
              // response.cookie('loggedIn', 'true').send('Cookie has bee set'); // Couldn't find the correct way to use cookies in those languages :(
              // console.log("need to set cookie for " + email);
            } else {
              console.log(err, res);
            }
          });
        } else {
          response.send('notfound');
        }
      }
    );
  } else {
    console.log("Incorrect email and/or password!");

    response.send("empty");
  }
});

// app.post('/set-cookie', (req, res) => {
//   res.setHeader('Set-Cookie', 'loggedIn=true');
//   console.log(res.getHeaders());
// })

app.listen("8080", () => {
  console.log("Server started on port 8080");
});
