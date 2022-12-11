import React from "react";
import { useHistory } from "react-router-dom";
import "./about.css";
function About() {
  const history = useHistory();
  return (
    <div>
      <div className="about-container">
        <div className="chineesefood">
          <img className="image1" src="/assets/chineesefood.jpg"></img>
        </div>
        <div className="girleating">
          <img className="image1" src="/assets/eating1.webp"></img>
        </div>
        <div className="italian">
          <img className="image1" src="/assets/italian.jpg"></img>
        </div>
      </div>
      <div className="des-button-wrapper">
        <button
          className="scrapper-button"
          onClick={(e) => {
            history.push("./popular");
          }}
        >
          Check out the world's most popular Food!
        </button>

        <div className="des">
          FoodEverywhere is exactly the website you are looking for if you're
          intrested in food. <br></br>It has all 50 most popular foods around
          the world, food quiz and even a chat where you can share your
          knowledge and recipes with pals worldwide. <br></br>Deep into my site
          and find everything you want to know about food!
        </div>
      </div>
    </div>
  );
}

export default About;
