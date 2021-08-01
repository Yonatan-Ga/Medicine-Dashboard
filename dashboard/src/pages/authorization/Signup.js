import React from "react";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useState } from "react";
import Axios from "axios";

const bcrypt = require('bcryptjs')

function SignupPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [country, setCountry] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    Axios.post("http://localhost:8080/register", {
      first: first,
      last: last,
      country: country,
      user: user,
      email: email,
      password: hashedPassword,
    }).then(() => {
      console.log('Success');
      history.push("/");
    });
  }


  return (
    <Jumbotron>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstName"
            onChange={(event) => {
              setFirst(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="lastName"
            onChange={(event) => {
              setLast(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Country"
            id="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            id="userName"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
    </Jumbotron>
  );
}
export default SignupPage;
