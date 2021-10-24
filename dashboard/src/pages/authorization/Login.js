import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// const bcrypt = require("bcryptjs");

function LoginPage() {
  const [serverResponse, setServerResponse] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [boxChecked, setBoxChecked] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    Axios.post("http://localhost:8080/login", {
      email: email,
      // password: hashedPassword,
      password: password,
    }).then((response) => {
      if (
        response.data !== "notfound" &&
        response.data !== "empty" &&
        response.data !== "wrongPassword"
      ) {
        console.log(response);
        if (boxChecked) {
          // set expiry date for two weeks is "remember me" checked
          let date = new Date();
          date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);
          date.toUTCString();

          cookies.set("name", response.data.fname, {
            path: "/",
            expires: date,
          });
          cookies.set("loggedIn", true, { path: "/", expires: date });
          cookies.set("accessToken", response.data.accessToken, {
            path: "/",
            expires: date,
          });
        } else {
          // or set for Session if not checked
          cookies.set("name", response.data.fname, { path: "/" });
          cookies.set("loggedIn", true, { path: "/" });
          cookies.set("accessToken", response.data.accessToken, { path: "/" });
        }
        history.push("/");
      } else {
        if (response.data === "notfound" || response.data === "wrongPassword") {
          setServerResponse("Incorrect email and/or password!");
        }
        if (response.data === "empty") {
          setServerResponse("Please fill the form");
        }
      }
    });
  }

  const handleCheck = (e) => {
    setBoxChecked(e);
  };
  return (
    <Jumbotron>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div>
          <span>{serverResponse}</span>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="stayLoggedIn"
              onChange={(e) => {
                handleCheck(e.target.checked);
              }}
            />
            <label className="custom-control-label" htmlFor="stayLoggedIn">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="text-right">
          <br />
          <span>
            Forgot <Link to="/forgot">password? </Link>
          </span>
          <span>
            &nbsp;&nbsp; | &nbsp;&nbsp; Not registerd yet?{" "}
            <Link to="/signup">Sign-up</Link> Now!
          </span>
        </p>
      </form>
    </Jumbotron>
  );
}
export default LoginPage;
