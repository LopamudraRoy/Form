import React from "react";
import { useState } from "react";
export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name="name"
        value={formData.name}
        placeholder="your name"
        onChange={handleChange}
      />
      <br />
      <input
        type={"email"}
        name="email"
        value={formData.email}
        placeholder="your email"
        onChange={handleChange}
      />
      <br />
      <textarea name="message" placeholder="your message" />
      <br />
      <button>Submit</button>
    </form>
  );
}
