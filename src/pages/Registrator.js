import React, {useEffect, useState} from "react";
import axios from "axios";
import Form from '../components/Form';
import Header from "../components/Header";
import User from "../components/User";
import Contact from "../components/Contact";

const Registrator = () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers]=useState([]);
  const[newUser, setNewUser]=useState('');

  useEffect(() => {
    const getUser = async () => {
      const {data:res} = await axios.get(api);
      setUsers(res);
    }
    getUser();
  }, []);

  const addUser = async() => {
    const user = {name:newUser, body: 'New'};
    await axios.post(api, user);
    setUsers([user, ...users])
  }

  return (
    <div>
      <Header />
      <Contact/>
      <Form setNewUser={setNewUser} addUser={addUser}/>
      <User users={users} />
    </div>
  );
};

export default Registrator;
