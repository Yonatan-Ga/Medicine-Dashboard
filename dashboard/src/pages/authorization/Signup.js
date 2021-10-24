import React from "react";
import { Link, useHistory } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useState } from "react";
import Axios from "axios";
import CountrySelector, { countryValue } from "../../components/layout/CountrySelector";
import { FormCheckLogic } from "./FormCheck"; //not working

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const bcrypt = require("bcryptjs");

function SignupPage() {
  const [boxChecked, setBoxChecked] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [serverResponse, setServerResponse] = useState("");

  let history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault();
    const [formIsValid, errorMessage] =    //not working                                                    
      FormCheckLogic(
        {first: first,
        last: last,
        country: countryValue.label,
        user: user,
        email: email,
        password: password}
      );
    if (formIsValid) {
      const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      Axios.post("http://localhost:8080/register", {
        first: first,
        last: last,
        country: countryValue.label,
        user: user,
        email: email,
        password: hashedPassword,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // offset = -(new Date().getTimezoneOffset() / 60)
        os: window.navigator.userAgentData,
        created: new Date()
      }).then((res) => {
        setServerResponse(res.data);
        console.log(res.data);
        if (res.data === "Success") {
          if (boxChecked) {
            // set expiry date for two weeks is "remember me" checked
            let date = new Date();
            date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);
            date.toUTCString();
  
            cookies.set("name", first, {
              path: "/",
              expires: date,
            });
            cookies.set("loggedIn", true, { path: "/", expires: date });
          } else {
            // or set for Session if not checked
            cookies.set("name", first, { path: "/" });
            cookies.set("loggedIn", true, { path: "/" });
          }
          history.push("/");
        }        
      });
    } else { setServerResponse(errorMessage) };
  }

  const handleCheck = (e) => {
    setBoxChecked(e);
  };

  return (
    <Jumbotron>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div>
          <span>{serverResponse}</span>
        </div>
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
          <CountrySelector id="country" />
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
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="stayLoggedIn"
              onChange={(e) => {handleCheck(e.target.checked)}}
            />
            <label className="custom-control-label" htmlFor="stayLoggedIn">
            Rremember me after registration complete
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered? <Link to="/login">sign in</Link>
        </p>
      </form>
    </Jumbotron>
  );
}
export default SignupPage;
