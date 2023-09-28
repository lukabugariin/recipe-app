import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      authid: "fY1nROHGBXP8FhBPqnISUIEnNAu2",
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "https://login-zazjbx7nka-uc.a.run.app/",
        {
          email: formData.email,
          password: formData.password,
        },
        { headers }
      );

      console.log("User logged in:", response.data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
