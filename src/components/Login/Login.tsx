import React from "react";
import { useLogin } from "./useLogin";
import "./login.scss";
export const Login = () => {
  const { handleLogin, username, password, setPassword, setUsername } =
    useLogin();
  return (
    <div className="login-container">
      <div className="login-container__section">
        <div>Username : </div>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="login-container__section">
        <div>Password :</div>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
