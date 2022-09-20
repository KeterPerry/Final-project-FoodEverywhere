import React from "react";
import "./about.css";
function About() {
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
      <div className="des">
        FoodEverywhere is exactly the website you are looking for if you're
        intrested in food. <br></br>It has all 50 most popular foods around the
        world, food games and even a chat where you can share your knowledge and
        recipes with pals worldwide. <br></br>Deep into my site and find
        everything you want to know about food!
      </div>
    </div>
  );
}

export default About;
