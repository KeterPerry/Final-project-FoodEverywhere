import React from "react";
import { useState, useEffect } from "react";
import userApi from "../../apis/userApi";
import Spinner from "../../components/spinner/Spinner.js";
import "./popular.css";

function Popular() {
  const [popularFoods, setPopularFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await userApi().get("/popularFood/getPopularFood");
        console.log(data);
        setPopularFood(data);
      } catch (err) {
        console.log(err.message);
        setError("There has been an error loading the data, please try again");
      }
    }
    fetch();
    setIsLoading(false);
  }, []);

  return (
    <div className="popular-main">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="popularFood-grid">
          {popularFoods.map((item, index) => {
            return (
              <div className="popular-food-item" key={index}>
                <div className="foodName">{item.foodName}</div>
                <img src={item.foodImage} alt="#"></img>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Popular;
