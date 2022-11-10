import React from "react";
import "./home.css";
import Logo from "../../components/logo/logo.js";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id == "learn") {
      history.push("/foods");
    } else {
      history.push("/interestingfoods");
    }
  };
  return (
    <div>
      <div className="home-pic">
        <div className="side-logo">FoodEverywhere</div>
        <div className="share-learn">
          <Button
            className="share-food"
            variant="contained"
            color="error"
            onClick={handleClick}
            style={{
              width: "17rem",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Share your interesting food with us!
          </Button>

          <Button
            id="learn"
            className="food-shared"
            variant="contained"
            color="error"
            onClick={handleClick}
            style={{
              width: "17rem",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            Learn about different foods shared info from aroun the globe!
          </Button>
        </div>

        {/* <img src="/assets/homepic.jpg"></img> */}
      </div>
    </div>
  );
}

export default Home;
