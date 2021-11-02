import React from "react";
import { Link } from "react-router-dom";

// Need to add the backend part...
// using tokens??

function ForgotPasswordPage() {
  return (
    <form>
      <h3>Forgot Your Password?</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Do you <Link to='/login'>remember?</Link>
      </p>
    </form>
  );
}
export default ForgotPasswordPage;
