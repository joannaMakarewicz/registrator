import React, { useState } from "react";
import TextInput from "./TextInput";
import "./Form.css";

const Form = () => {
  const defaultData = {
    name: "",
    surname: "",
    age: "0",
  };
  const [formData, setFormData] = useState(defaultData);
  const [login, setLogin] = useState(false);

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

  const afterFormClick = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultData);
  };

  return (
    <form className="form" onSubmit={afterFormClick}>
      <label>
        Name:
        <TextInput
          id="name"
          type="text"
          name="name"
          placeholder="Add name"
          onChange={handleChange}
        />
      </label>
      <label>
        Surname:
        <TextInput
          type="text"
          name="surname"
          placeholder="Add surname"
          onChange={handleChange}
        />
      </label>
      <label>
        Age:{" "}
        <TextInput
          type="number"
          name="age"
          placeholder="Add age"
          onChange={handleChange}
        />
      </label>
      {login ? <p>Użytkownik zalogowany</p> : <p>Użytkownik niezalogowany</p>}

      <button type="submit" onClick={() => setLogin(!login)}>
        Add user
      </button>
    </form>
  );
};

export default Form;
