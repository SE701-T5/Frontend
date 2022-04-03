import React from "react";
import "./newCommunity.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";
import { useMutation } from "../../hooks/useApi";
import { useCommunities } from "../../hooks/useCommunities";
import { ContactlessOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const NewCommunity = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const {refretchCommunities} = useCommunities();

  const createCommunityApiCall = useMutation(
    '/communities',
    {
      method:"post"
    }
  );

  const onCreateClick = ()=>{
    createCommunityApiCall({
      data:{
        name:name,
        description:description,
        img:"https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg"
      }
    }).then((res)=>{
      alert("successfully create community")
      refretchCommunities()
      navigate("/homepage",{replace:true})
    }).catch((error)=>{
      alert(error.response.data.error)
    })
  }

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
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setDescription(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="ncCarouselWrapper">
              <Carousel
                className="carousel"
                dynamicHeight
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
              >
                {images.map((image, idx) => {
                  return (
                    <Box key={idx}>
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
              <Button onClick={onCreateClick} variant="contained">Create</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default NewCommunity;
