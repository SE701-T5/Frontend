import React, { useState } from "react";
import "./newPost.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";
import { useMutation } from "../../hooks/useApi";
import { useCommunities } from "../../hooks/useCommunities";
import { useNavigate } from "react-router-dom";

const styles = {
  "&.MuiButton-outlined": {
    color: "gray",
    border: 1,
  },
};

const NewPost = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [community, setCommunity] = useState('');

  const {communities,loading} = useCommunities();

  const navigate = useNavigate()
  
  const postCreateApiCall = useMutation(
    `/communities/${community}/posts`,
    {
      method:"post"
    }
  );
  
  const CreatePostClick = ()=>{
    postCreateApiCall({
      data: {
        title:title,
        bodyText: text,
      },
    }).then(function(success){
      alert("successfully create a post")
      navigate("/homepage",{replace:true})
    }).catch(function(error){
      alert("fail to create a post")
    })
  }

  const handleChange=(event: SelectChangeEvent)=>{
    setCommunity(event.target.value);
  }
  
  if(loading){
    return <>loading</>
  }

  return (
    <div className="npTitleWrapper">
      <h1 className="npTitle">New Post</h1>
      <div className="npFormContainer">
        <Grid container spacing={2} justify="space-around" md>
          <Grid item xs={12}>
            <div className="npTableElementTitleForum">
              <TextField
                required
                fullWidth
                id="outlined-basic"
                label="Title"
                variant="outlined"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="npTableElementTitleForum">
              <FormControl required fullWidth>
                <InputLabel id="npForumSelectionLabel">
                  Select the forum of your post
                </InputLabel>
                <Select
                  labelId="npForumSelectionLabel"
                  value={community}
                  label="Select the forum of your post"
                  onChange={handleChange}
                >
                  {!loading? communities.map((community,index)=>(<MenuItem key={index} value={community.id}>{community.name}</MenuItem>)) : <div></div>}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="npMainEditor">
              <TextField
                multiline
                required
                id="outlined-basic"
                label="Text Editor"
                variant="outlined"
                minRows={12}
                maxRows={12}
                fullWidth
                onChange={(e)=>setText(e.target.value)}
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
            <div className="npUploadMedia">
              <Button
                sx={styles}
                label="Upload media"
                variant="outlined"
                component="label"
                endIcon={<AddPhotoAlternateIcon />}
              >
                Upload media
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
            <div className="npSubmitButton">
              <Button sx={styles} label="Post" variant="outlined" onClick={CreatePostClick}>
                Post
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewPost;
