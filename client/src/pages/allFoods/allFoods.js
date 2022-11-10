import React from "react";
import "./allFoods.css";
import { useState, useEffect } from "react";
import FoodItem from "../../components/foodItem/foodItem.js";
import userApi from "../../apis/userApi.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useUser } from "../../context/User.context.js";
import PopUp from "../../components/popUpDeleteUpdate/popUp.js";

export default function Foods() {
  const { allFoodsData, setAllFoodsData, popUp, setpopUp } = useUser();
  console.log("hey");
  console.log(allFoodsData);

  useEffect(() => {
    async function fetchD() {
      try {
        const { data } = await userApi().get("/interestingFood/getAllfoods");
        console.log(data);
        setAllFoodsData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchD();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="allFoods-wrapper">
        <div className="allFoods-container">
          <Slider {...settings}>
            {allFoodsData.map((item) => {
              return (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  foodName={item.itemsName}
                  image={item.image}
                  description={item.description}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      {popUp && (
        <div className="delete-popUp-container">
          <PopUp optionName="delete"></PopUp>
        </div>
      )}
    </>
  );
}
