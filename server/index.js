require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); // learn about cors
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

let refreshTokens = [];

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
  const created = req.body.created; // Couldn't find the way to create this automatically in the DB
  const timezone = req.body.timezone;
  const os = req.body.os;

  db.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1", // add- if there is no DB- create one.
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length > 0) {
        console.log(result);
        res.send("Email is already used. Please choose another or log in.");
      } else {
        db.query(
          "SELECT * FROM users WHERE username = ? LIMIT 1", // could be in the same search as the email...
          [user],
          (err, result) => {
            if (err) {
              console.log(err);
            } else if (result.length > 0) {
              console.log(result);
              res.send(
                "Username is already used. Please choose another or log in."
              );
            } else {
              db.query(
                "INSERT INTO users (fname, lname, username, email, created, timezone, os, password, country) VALUES (?,?,?,?,?,?,?,?,?)",
                [
                  first,
                  last,
                  user,
                  email,
                  created,
                  timezone,
                  os,
                  password,
                  country,
                ],
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
  );
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
            // console.log(res);
            if (!err && res) {
              // console.log(result);
              // response.send(result);
              const accessToken = generateAccessToken(result[0].id); //JWT auth system is not complete. 
              const refreshToken = jwt.sign(
                result[0].id,
                process.env.REFRESH_TOKEN_SECRET
              );
              // console.log(accessToken + '  ' + refreshToken);
              refreshTokens.push(refreshToken);
              // console.log(refreshTokens);
              response.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                fname: result[0].fname,
              });
            } else {
              response.send("notfound");
            }
          });
        } else {
          console.log("Incorrect password!");
          response.send("wrongPassword");
        }
      }
    );
  } else {
    console.log("Incorrect email!");

    response.send("empty");
  }
});

//try to auth user with token. not comlete yet

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

function generateAccessToken(user) {
  console.log('generateAccessToken')
  return jwt.sign({id: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 6000 });
}

function authenticateToken(req, res, next) { // need to check why using this
  console.log('authenticateToken')

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen("8080", () => {
  console.log("Server started on port 8080");
});
