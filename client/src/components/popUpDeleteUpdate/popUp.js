import React from "react";
import "./popUp.css";
import { useUser } from "../../context/User.context.js";
import userApi from "../../apis/userApi.js";

export const PopUp = ({ currentId }) => {
  const {
    popUp,
    setpopUp,
    allFoodsData,
    setAllFoodsData,
    windowUpdateDetails,
    setWindowUpdateDetails,
    optionName,
    setoptionName,
  } = useUser();

  const handleNo = () => {
    console.log("no");
    setpopUp(false);
  };
  const handleYes = async () => {
    console.log("yes");
    console.log(optionName);
    if (optionName === "delete") {
      // setpopUp(false);
      const dataToBeDeleted = await userApi().delete(
        `./interestingFood/deletefood/${currentId}`
      );
      console.log(dataToBeDeleted.data.data);
      setAllFoodsData((prev) => {
        return prev.filter(
          (food) => food._id !== currentId,
          console.log(allFoodsData)
        );
      });
      setpopUp(false);
    }
    if (optionName === "update") {
      setpopUp(false);
      setWindowUpdateDetails(true);
    }
  };

  return (
    <>
      <div className="popUp-container">
        <p>Are you sure you want to {optionName} this item?</p>
        <br></br>
        <div className="buttons-wrapper">
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>
    </>
  );
};

export default PopUp;
