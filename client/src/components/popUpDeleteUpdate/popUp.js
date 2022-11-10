// import React from "react";
// import "./popUp.css";
// import { useUser } from "../../context/User.context.js";
// import userApi from "../../apis/userApi.js";

// export const PopUp = ({ optionName, idFromItem }) => {
//   const { popUp, setpopUp, allFoodsData, setAllFoodsData, windowUpdateDetails, setWindowUpdateDetails } = useUser();

//   const handleNo = () => {
//     console.log("no");
//     setpopUp(false);
//   };
//   const handleYes = async () => {
//     // if (optionName === "delete"){

//     // console.log("yes");
//     // // setpopUp(false);
//     // const dataToBeDeleted = await userApi().delete(
//     //   `./interestingFood/deletefood/${idFromItem}`
//     // );
//     // console.log(dataToBeDeleted.data.data);
//     // setAllFoodsData((prev) => {
//     //   return prev.filter(
//     //     (food) => food._id !== idFromItem,
//     //     console.log(allFoodsData)
//     //   );
//     // });}
// else if (optionName === "update"){
//   setpopUp(false);
//  setWindowUpdateDetails(true);
// }

//   };

//   return (
//     <>
//     <div className="popUp-container">
//       <p>Are you sure you want to {optionName} this item?</p>
//       <br></br>
//       <div className="buttons-wrapper">
//         <button onClick={handleYes}>Yes</button>
//         <button onClick={handleNo}>No</button>
//       </div>
//     </div>
//     {windowUpdateDetails&&
//     <UpdateWindow updateId= {idFromItem}></UpdateWindow>}
//     </>
//   );
// };

// export default PopUp;
