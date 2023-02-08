import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='registrator'/>}/>
          <Route path='/registrator' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
