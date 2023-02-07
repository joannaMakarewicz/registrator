import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import "./Form.css";

const Form = (setNewUser, addUser) => {

  const defaultData = {
    name: '',
    email: '',
    company: '',
  };

  const [formData, setFormData] = useState(defaultData);


  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const afterFormClick = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFormData(defaultData);
  };

  return (

    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="form"
      onSubmit={afterFormClick}
    >
      <p className="header__content">Add new user to our course.</p>

      <label>
        Name:
        <TextInput
          id="name"
          type="text"
          name="name"
          placeholder="Add name"
          onChange={(e) => setNewUser(e.target.value)}
        />
      </label>

      <label>
        E-mail:
        <TextInput
          type="email"
          name="email"
          placeholder="Add email"
          onChange={handleChange}
        />
      </label>

      <label>
        Company:
        <TextInput
          type="text"
          name="company"
          placeholder="Add company"
          onChange={handleChange}
        />
      </label>

      <button type="submit" onClick={() => addUser}>
        Add user
      </button>

    </Box>
  );
};

export default Form;
