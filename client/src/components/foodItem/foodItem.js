import React from "react";
import "./foodItem.css";
import userApi from "../../apis/userApi.js";
import { useUser } from "../../context/User.context.js";
import PopUp from "../popUpDeleteUpdate/popUp.js";

export default function FoodItem({ foodName, image, description, id }) {
  const { allFoodsData, setAllFoodsData, popUp, setpopUp } = useUser();

  const handleDelete = async () => {
    setpopUp(true);

    // const dataToBeDeleted = await userApi().delete(
    //   `./interestingFood/deletefood/${id}`
    // );
    // console.log(dataToBeDeleted.data.data);
    // setAllFoodsData((prev) => {
    //   return prev.filter((food) => food._id !== id, console.log(allFoodsData));
    // });
  };

  return (
    <>
      <div className="foodItem">
        <h1 className={foodName}>{foodName}</h1>
        <img src={`/uploads/${image}`} alt="#"></img>
        <p>{description}</p>
        <br></br>
        <div className="update-delete-buttons">
          <button className="update">Update</button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {/* <div style={{ display: "none" }} className="pop">
        <PopUp idFromItem={id}></PopUp>;
      </div> */}
    </>
  );
}
