import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Capacitors from "./Components/capacitors";
import Resitors from "./Components/resistors";
import Diodes from "./Components/diodes";
import Integratedcircuit from "./Components/ic";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import Transistors from "./Components/transistors";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="diodes" element={<Diodes />} />
          <Route exact path="resistors" element={<Resitors />} />
          <Route exact path="capacitors" element={<Capacitors />} />
          <Route exact path="ic" element={<Integratedcircuit />} />
          <Route exact path="transistors" element={<Transistors />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
