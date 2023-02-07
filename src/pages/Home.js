import React, {useEffect, useState} from "react";
import axios from "axios";
import Form from '../components/Form';
import Header from "../components/Header";
import User from "../components/User";
import Contact from "../components/Contact";

const Home = () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers]=useState([]);

  useEffect(() => {
    const getUser = async () => {
      const {data:res} = await axios.get(api);
      setUsers(res);
    }
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <Contact/>
      <Form/>
      <User users={users} />
    </div>
  );
};

export default Home;
