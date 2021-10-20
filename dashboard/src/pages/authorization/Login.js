import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function LoginPage() {
  const [serverResponse, setServerResponse] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data !== "notfound" && response.data !== "empty") {
        cookies.set("name", response.data[0].fname, { path: "/" });
        cookies.set("loggedIn", true, { path: "/" });
        history.push("/");
      } else {
        if (response.data === "notfound") {
          setServerResponse("Incorrect email and/or password!");
        }
        if (response.data === "empty") {
          setServerResponse("Please fill the form");
        }
      }
    });
  }

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
            />
            <label className="custom-control-label" htmlFor="stayLoggedIn">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/forgot">password?</Link>
        </p>
      </form>
    </Jumbotron>
  );
}
export default LoginPage;
