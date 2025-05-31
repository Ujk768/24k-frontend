import { useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // Simulate a login process
    // console.log(`Logging in with username: ${username} and password: ${password}`);
    // Here you would typically call an API to authenticate the user
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
};
