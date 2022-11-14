import React from "react";
import { useState, useEffect } from "react";
import "./updateWindow.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sizing } from "@mui/system";
import userApi from "../../apis/userApi.js";
import { useUser } from "../../context/User.context.js";

function UpdateWindow({ updateId, currentItem }) {
  const { allFoodsData, setAllFoodsData, setWindowUpdateDetails } = useUser();
  const [foodToUpdate, setfoodToUpdate] = useState({
    itemsName: currentItem.itemsName,
    image: currentItem.image,
    description: currentItem.description,
  });
  console.log(foodToUpdate);

  const handleUpdate = async (e) => {
    console.log("handleupdate");
    try {
      e.preventDefault();
      const data = await userApi().patch(
        `/interestingFood/editfood/${currentItem._id}`,
        foodToUpdate
      );
      console.log(data);
      setAllFoodsData((prev) => {
        return prev.map((food) => {
          if (food.id === currentItem._id) return data;
          else return food;
        });
      });
      alert("Your food item has been updated!");
      setWindowUpdateDetails(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    ///to Check
    if (e.target.type === "file") {
      setfoodToUpdate((prev) => {
        console.log(e.target.id);
        return { ...prev, [e.target.id]: e.target.files[0].name };
      });
    }

    setfoodToUpdate((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const theme = createTheme({
    typography: {
      fontSize: 25,
    },
  });
  const handleClose = () => {
    setWindowUpdateDetails(false);
  };

  return (
    <div className="update">
      <form onSubmit={handleUpdate}>
        <Box className="food-details">
          <ThemeProvider theme={theme}>
            <TextField
              id="itemsName"
              label="FoodName"
              variant="outlined"
              value={foodToUpdate.itemsName}
              color="error"
              onChange={handleChange}
            />
            <div className="imageUpload">
              <TextField
                id="image"
                label="Image Upload"
                filename="image"
                type="file"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                color="error"
                onChange={handleChange}
              />
            </div>
            <TextareaAutosize
              id="description"
              aria-label="empty textarea"
              placeholder="Write your description here."
              value={foodToUpdate.description}
              onChange={handleChange}
              minRows={6}
            />
            <br></br>
            <Button
              variant="contained"
              color="error"
              style={{ width: "30%", alignSelf: "center" }}
              onClick={handleUpdate}
            >
              Update
            </Button>

            {/* <Button variant="outlined">Share</Button> */}
          </ThemeProvider>
        </Box>
        <button onClick={handleClose}>X</button>
      </form>
    </div>
  );
}

export default UpdateWindow;
