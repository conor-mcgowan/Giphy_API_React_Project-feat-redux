import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(history);
  function login() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      props.setUser(username);
      history.push("/search");
    }
  }

  return (
    <>
      <h1 className="text-center">Login</h1>
      <div className="form">
        <div className="form-container">
          <label htmlFor="username" className="text-center label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label
            htmlFor="password"
            className="text-center label"
            value={username}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </label>
          <input type="password" id="password" className="input" />
        </div>
        <button onClick={() => login()}>Log In</button>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
