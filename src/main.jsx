import ReactDOM from "react-dom/client";
import React from 'react';
import "../src/styles.css";
import { Navbar } from "./Components/Navbar"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <React.Fragment>
      <Navbar/>
      </React.Fragment>
    );


