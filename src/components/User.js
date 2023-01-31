import React from 'react'

const User = ({username, surname, age}) => {
  return (
    <div>
      <h2>New user</h2>
      <ul>
        <li>Username: {username}</li>
        <li>Surname: {surname}</li>
        <li>Age: {age}</li>
      </ul>
    </div>
  )
}

export default User;
