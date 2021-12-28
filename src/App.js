import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Capacitors from "./Components/capacitors";
import Resitors from "./Components/resistors";
import Diodes from "./Components/diodes";
import Integratedcircuit from "./Components/ic";
import styles from "./App.css";
import Navbar from "./Components/navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="styles.app">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="diodes" element={<Diodes />} />
          <Route exact path="resistors" element={<Resitors />} />
          <Route exact path="capacitors" element={<Capacitors />} />
          <Route exact path="ic" element={<Integratedcircuit />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
