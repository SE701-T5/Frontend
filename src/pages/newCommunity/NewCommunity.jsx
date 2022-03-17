import React from "react";
import "./newCommunity.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";
const NewCommunity = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="ncContent">
      <h1 className="ncTitle">New Community Creation</h1>
      <form className="ncFormContainer">
        <Grid container spacing={2} justify="space-around">
          <Grid item xs={12}>
            <div className="ncTextBox">
              <TextField
                required
                fullWidth
                id="outlined-basic"
                label="Community Name"
                variant="outlined"
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="ncTextBox">
              <TextField
                multiline
                required
                fullWidth
                maxRows={15}
                minRows={15}
                id="outlined-basic"
                label="Community Description"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="npCarouselWrapper">
              <Carousel dynamicHeight showThumbs={false} autoPlay infiniteLoop>
                {images.map((image) => {
                  return (
                    <Box>
                      <img alt="uoaimage" src={image} />
                      <Button
                        className="legend"
                        color="primary"
                        style={{ top: "20px", bottom: "auto" }}
                        onClick={() => {
                          setImages(
                            images.filter((imageMain) => imageMain !== image)
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  );
                })}
              </Carousel>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="ncUploadButton">
              <Button
                label="Upload media"
                variant="outlined"
                component="label"
                endIcon={<AddPhotoAlternateIcon />}
              >
                Upload Background Image
                <input
                  type="file"
                  hidden
                  onChange={(evt) => {
                    const file = evt.target.files[0];

                    var imageType = /image.*/;

                    if (file && file.type.match(imageType)) {
                      var reader = new FileReader();
                      reader.onload = function (e) {
                        const imageString = reader.result;
                        const newImagesArray = [...images, imageString];
                        setImages(newImagesArray);
                      };

                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </Button>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="ncSubmitButton">
              <Button variant="contained">Create</Button>
            </div>
          </Grid>
        </Grid>
      </form>

      <div></div>
    </div>
  );
};

export default NewCommunity;
