import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registrator from "./pages/Registrator";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/registrator' element={<Registrator/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
