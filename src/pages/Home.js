import React from "react";
import Form from '../components/Form';
import Header from "../components/Header";
import User from "../components/User";
import Contact from "../components/Contact";

const Home = () => {
  const users = [
    {
      username: "Julia",
      surname: "Roberts",
      age: 55,
    },
    {
      username: "Leonardo",
      surname: "DiCaprio",
      age: 48,
    },
    {
      username: "Ben",
      surname: "Affleck",
      age: 50,
    },
    {
      username: "Hugh",
      surname: "Grant",
      age: 62,
    },
  ];
  return (
    <div>
      <Header />
      <Contact/>
      <Form />
      <User users={users} />
    </div>
  );
};

export default Home;
