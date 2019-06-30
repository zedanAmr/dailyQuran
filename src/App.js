import React from "react";
import "./App.css";
import img from "./assets/img/image1.jpg";

const image = {
  maxWidth: "100%"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="Background-Image" style={image} alt="logo" />
        <p>Assalamu Alaykum! Read this line of Quran!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
