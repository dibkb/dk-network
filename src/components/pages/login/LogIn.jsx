import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LogIn.scss";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="container login-container">
      <h4 className="heading">Login</h4>
      <form className="login-form" onSubmit={submitForm}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
        />
        <Button
          variant="contained"
          type="submit"
          disableElevation
          size="large"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
