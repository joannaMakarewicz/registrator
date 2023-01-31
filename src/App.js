import './App.css';
import Header from './components/Header';
import User from './components/User';

function App() {

  const newUser = {
    username: 'Joanna',
    surname: 'Makarewicz',
    age: 37
  }
  return (
    <div>
      <Header/>
      <User username={newUser.username} surname={newUser.surname} age={newUser.age} />
    </div>
  );
}

export default App;
