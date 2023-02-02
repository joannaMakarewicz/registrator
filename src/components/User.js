import React from "react";
import ImageAvatars from "./ImageAvatars";
import "./User.css";

const User = ({ users }) => {
  return (
    <section className="user">
      <article className="user__container">
        <ImageAvatars className="user__avatars" />
        <h2 className="user__heading">Our users</h2>
        {users.map((user, index) => {
          return (
            <ul className="user__user" key={index}>
              <li className="user__data">
                Username:{" "}
                <span className="user__realData">{user.username} </span>
              </li>
              <li className="user__data">
                Surname: <span className="user__realData">{user.surname}</span>
              </li>
              <li className="user__data">
                Age: <span className="user__realData">{user.age}</span>
              </li>
            </ul>
          );
        })}
      </article>
    </section>
  );
};

export default User;
