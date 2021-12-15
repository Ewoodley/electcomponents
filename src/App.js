import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Capacitors from "./Components/capacitors";
import Resitors from "./Components/resistors";
import Diodes from "./Components/diodes";
import Microcontrollers from "./Components/mc";
import style from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={style.grid}>
          <ul className={style.ul}>
            <li>
              <Link className={style.button} to="diodes">
                Diodes
              </Link>
            </li>
            <li>
              <Link className={style.button} to="resistors">
                Resistors
              </Link>
            </li>
            <li>
              <Link className={style.button} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.button} to="capacitors">
                Capacitors
              </Link>
            </li>
            <li>
              <Link className={style.button} to="microcontrollers">
                Microcontrollers
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="diodes" element={<Diodes />} />
          <Route exact path="resistors" element={<Resitors />} />
          <Route exact path="capacitors" element={<Capacitors />} />
          <Route exact path="microcontrollers" element={<Microcontrollers />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
