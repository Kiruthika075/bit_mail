import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    console.log(userObject);

    if (userObject.email === "admin@example.com") {
      navigate("/admin-dashboard");
    } else if (userObject.email === "faculty@example.com") {
      navigate("/faculty-dashboard");
    } else if (userObject.email === "student@example.com") {
      navigate("/student-dashboard");
    } else {
      alert("Unauthorized user");
    }
  };

  const handleGoogleLoginFailure = () => {
    alert("Google login failed. Please try again.");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "adminpass") {
      navigate("/admin-dashboard");
    } else if (username === "faculty" && password === "facultypass") {
      navigate("/faculty-dashboard");
    } else if (username === "student" && password === "studentpass") {
      navigate("/student-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>BIT Mailer Login</h2>

      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <GoogleOAuthProvider clientId="192768404798-u0q7mlsfj38k1e4u8m68ct8cqlbr4j1g.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
