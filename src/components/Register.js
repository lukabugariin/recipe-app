import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
        "https://addappuser-zazjbx7nka-uc.a.run.app/",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { headers }
      );

      toast.success("Registration successful!", { autoClose: 3000 });
      console.log("User registered:", response.data);

      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
        autoClose: 3000,
      });
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Register;
