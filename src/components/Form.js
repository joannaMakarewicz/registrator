import React, { useState } from "react";


const Form = () => {
  const defaultData = {
    name: '',
    surname: '',
    age:'0'
  }
  const [formData, setFormData] = useState(defaultData);



  const handleChange = (e) => setFormData(prevState => ({
    ...prevState,
  [e.target.id]:e.target.value,
  }));

  const afterFormClick = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultData);
  }


  return (
    <form onSubmit={afterFormClick}>
      <label>
        Name:
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Add name"
          onChange={handleChange}
        />
      </label>
      <label>
        Surname: <input type="text" name="surname" placeholder="Add surname"  onChange={handleChange}/>
      </label>
      <label>
        Age: <input type="number" name="age" placeholder="Add age"  onChange={handleChange}       />
      </label>
      <button type='submit'>Add user</button>
    </form>
  );
};

export default Form;
