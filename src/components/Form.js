import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);


  return (
    <div>
      <label>
        Name:
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Add name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Surname: <input type="text" name="surname" placeholder="Add surname"           onChange={(e) => {
            setSurname(e.target.value);
          }}/>
      </label>
      <label>
        Age: <input type="number" name="age" placeholder="Add age"           onChange={(e) => {
            setAge(e.target.value);
          }} />
      </label>
      <p>Name: {name}</p>
      <p>Surname: {surname} </p>
      <p>Age: {age} </p>
    </div>
  );
};

export default Form;
