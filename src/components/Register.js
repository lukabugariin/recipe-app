import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      authid: "fY1nROHGBXP8FhBPqnISUIEnNAu2",
      "Content-Type": "application/json",
    };

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(formData.password)) {
      setError(
        "Invalid password. Password should contain at least one lowercase letter, uppercase letter, number, and special character. Minimum length is 8 characters."
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://addappuser-zazjbx7nka-uc.a.run.app/",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { headers }
      );

      console.log("User registered:", response.data);

      setFormData({ name: "", email: "", password: "" });
      setError("");
    } catch (error) {
      setError(
        "An error occurred during registration. Please try again later."
      );
      console.error("Registration error:", error);
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type='submit'>Register</button>
      </form>
      {error && <p className='error-message'>{error}</p>}{" "}
    </div>
  );
};

export default Register;
