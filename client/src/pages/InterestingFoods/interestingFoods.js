import React from "react";
import { useState, useEffect } from "react";
import "./interestingFoods.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import userApi from "../../apis/userApi.js";
import { sizing } from "@mui/system";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function InterestingFoods() {
  const [interestingFood, setInterestingFood] = useState({
    itemsName: "",
    image: "",
    description: "",
  });
  console.log(interestingFood);

  const handleShare = async (e) => {
    try {
      e.preventDefault();
      const data = await userApi().post(
        "/interestingFood/add",
        interestingFood
      );
      console.log(data);
      setInterestingFood({ itemsName: "", image: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleImageChange = (e) => {
  //   setInterestingFood({ [e.target.id]: e.target.files[0] });
  // };
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setInterestingFood((prev) => {
        console.log(e.target.id);
        return { ...prev, [e.target.id]: e.target.files[0].name };
      });
    }

    setInterestingFood((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const theme = createTheme({
    typography: {
      fontSize: 25,
    },
  });

  return (
    <div className="intersting-foods">
      <div className="text-container">
        <div className="titles">
          <h1 className="title">InterestingFoods</h1>
          <h1 className="sub-title">
            Here You can share your own interesting food
          </h1>
        </div>

        <div className="arrow bounce"></div>

        <form onSubmit={handleShare}>
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
                {/* <TextField
                className="image-only"
                label="Image"
                variant="outlined"
                style={{ width: "70%" }}
                color="error"
                onChange={handleChange}
              /> */}
                {/* 
              <Button
                className="upload-only"
                variant="contained"
                component="label"
                style={{ width: "30%", height: "100%" }}
                color="error"
              >
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  name="file"
                  id="image"
                  value={interestingFood.image}
                />
              </Button> */}

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
                onClick={handleShare}
              >
                Share
              </Button>

              {/* <Button variant="outlined">Share</Button> */}
            </ThemeProvider>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default InterestingFoods;
