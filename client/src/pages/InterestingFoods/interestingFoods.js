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
import { useUser } from "../../context/User.context.js";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function InterestingFoods() {
  const [itemsName, setItemsName] = useState("");
  const [image, setUplaodImage] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser, setCurrentUser } = useUser();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("User");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  console.log(currentUser);
  const handleShare = async (e) => {
    console.log("Share");
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", currentUser._id);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("itemsName", itemsName);
    console.log(formData.user);

    try {
      const data = await userApi().post("/interestingFood/add", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      console.log(data);
      setItemsName("");
      setUplaodImage("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleItemsNameChange = (e) => {
    setItemsName(e.target.value);
    console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    setUplaodImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const theme = createTheme({
    typography: {
      fontSize: 21,
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

        <Box className="food-details">
          <div className="image-container">
            <img src={`uploads/${image.name}`} className="Image-uploaded"></img>
          </div>
          <form
            onSubmit={handleShare}
            className="form-interesting"
            method="POST"
            encType="multipart/form-data"
          >
            <ThemeProvider theme={theme}>
              <TextField
                sx={{ width: "22rem" }}
                id="itemsName"
                label="FoodName"
                variant="outlined"
                value={itemsName}
                color="error"
                onChange={handleItemsNameChange}
              />
              <div className="imageUpload">
                <TextField
                  sx={{ width: "22rem" }}
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
                  onChange={handleImageChange}
                  // ref={imageRef}
                />
              </div>

              <TextareaAutosize
                id="description"
                aria-label="empty textarea"
                placeholder=" Write your description here."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            </ThemeProvider>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default InterestingFoods;
