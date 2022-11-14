import React from "react";
import "./foodItem.css";
import userApi from "../../apis/userApi.js";
import { useUser } from "../../context/User.context.js";
import PopUp from "../popUpDeleteUpdate/popUp.js";

export default function FoodItem({
  foodName,
  image,
  description,
  id,
  handleId,
  theWholeItem,
  handleItem,
}) {
  const {
    allFoodsData,
    setAllFoodsData,
    popUp,
    setpopUp,
    optionName,
    setoptionName,
  } = useUser();

  const handleDelete = () => {
    setpopUp(true);
    handleId(id);
    setoptionName("delete");
  };

  const handleUpdate = () => {
    console.log("update");
    handleItem(theWholeItem);
    setoptionName("update");
    setpopUp(true);
  };

  return (
    <>
      <div className="foodItem">
        <h1 className={foodName}>{foodName}</h1>
        <img src={`/uploads/${image}`} alt="#"></img>
        <p>{description}</p>
        <br></br>
        <div className="update-delete-buttons">
          <button className="update" onClick={handleUpdate}>
            Update{" "}
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
