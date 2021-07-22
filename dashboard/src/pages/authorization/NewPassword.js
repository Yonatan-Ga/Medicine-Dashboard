import React from "react";
import { Jumbotron } from "react-bootstrap";

function NewPasswordPage() {
  return (
    <Jumbotron>
      <form>
        <h3>Create New Password</h3>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter a new password"
          />
        </div>

        <div className="form-group">
          <label>Reapet Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password (again)"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </Jumbotron>
  );
}
export default NewPasswordPage;
