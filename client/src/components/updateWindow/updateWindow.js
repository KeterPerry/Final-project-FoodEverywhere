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

function UpdateWindow({ idFromItem }) {
  const [foodToUpdate, setfoodToUpdate] = useState({
    itemsName: "",
    image: "",
    description: "",
  });
  console.log(foodToUpdate);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const data = await userApi().patch(
        `/interestingFood/editfood/${idFromItem}`,
        foodToUpdate
      );
      console.log(data);
      setallFoodsData((prev) => {
        return prev.map((food) => {
          if (food.id === idFromItem) return data;
          else return food;
        });
      });
    } catch (error) {
      console.log(error);
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

  return (
    <div className="update">
      <img src="./uploads/boy.png"></img>
      <form onSubmit={handleUpdate}>
        <Box className="food-details">
          <ThemeProvider theme={theme}>
            <TextField
              id="itemsName"
              label="FoodName"
              variant="outlined"
              value={interestingFood.itemsName}
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
              value={interestingFood.description}
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
      </form>
    </div>
  );
}

export default UpdateWindow;
