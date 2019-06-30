import React, { Component } from "react";
import "./Home.css";

const images = [
  require("./assets/img/image1.jpg"),
  require("./assets/img/image2.jpg"),
  require("./assets/img/image3.jpg")
];

function getNextImage() {}

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="color-overlay" />
        <img className="Image" src={images[0]} />
        <h1 className="logo">
          Daily <span className="logoHelp">Quran</span>
        </h1>
        <div className="middle">
          <h1>Welcome Masood!</h1>
          <h2>
            It is {new Date().toLocaleTimeString()}. Let's Learn Quran Together!
          </h2>
          <p>What is your goal this month?</p>
          <form>
            <label>
              <input className="inputLine" type="text" name="name" />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
