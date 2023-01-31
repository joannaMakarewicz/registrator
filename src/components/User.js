import React from "react";

const User = ({ users }) => {
  return (
    <div>
      <h2>Our users</h2>
      {users.map((user, index) => {
        return (
          <ul key="index">
            <li>Username: {user.username}</li>
            <li>Surname: {user.surname}</li>
            <li>Age: {user.age}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
