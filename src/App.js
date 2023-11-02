import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailValidation = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordValidation = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      console.log("Form has error");
    } else {
      console.log("Form submitted successfully !!");
    }
  };
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            className={`form-input ${emailError ? "error" : ""}`}
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailValidation}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">Password : </label>
          <input
            className={`form-input ${passwordError ? "error" : ""}`}
            name="password"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordValidation}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="form-control">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
