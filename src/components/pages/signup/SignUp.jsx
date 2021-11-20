import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SignUp.scss";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="container signup-container">
      <h4 className="heading">Signup</h4>
      <form className="signup-form" onSubmit={submitForm}>
        <TextField
          id="outlined-basic"
          label="Display Name"
          variant="outlined"
          size="small"
          fullWidth
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
        />
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
        <Button variant="contained" type="submit" disableElevation size="large">
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
