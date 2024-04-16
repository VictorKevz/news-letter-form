import { React, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="outer-container">
        <div className="grid-container">
          <Form />
        </div>
         <Footer/>
      </div>
     
    </div>
  );
}

export default App;
