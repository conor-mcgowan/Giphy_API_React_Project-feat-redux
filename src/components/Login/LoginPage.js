import React from "react";

const LoginPage = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-center">Log In</h1>
      <div className="form">
        <div className="form-container">
          <label htmlFor="username" class="text-center label">
            Username
          </label>
          <input type="text" id="username" className="input" />
        </div>
        <div className="form-container">
          <label htmlFor="password" class="text-center label">
            Password
          </label>
          <input type="text" id="password" className="input" />
        </div>
        <button>Log In</button>
      </div>
    </>
  );
};

export default LoginPage;
