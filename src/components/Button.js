import React from "react";

const Button = () => {
  const extraInformation = () => {
    alert("Your registration is finished");
  };
  return <button onClick={extraInformation}>Add user</button>;
};

export default Button;
