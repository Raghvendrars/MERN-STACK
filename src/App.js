import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddStudent />} />
          <Route exact path="/update" element={<UpdateStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
