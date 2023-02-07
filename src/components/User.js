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
                <span className="user__realData">{user.name} </span>
              </li>
              <li className="user__data">
                E-mail: <span className="user__realData">{user.email}</span>
              </li>
              <li className="user__data">
                Company: <span className="user__realData">{user.company.name}</span>
              </li>
            </ul>
          );
        })}
      </article>
    </section>
  );
};

export default User;