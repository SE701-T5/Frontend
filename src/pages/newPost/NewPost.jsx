import React from "react";
import "./newPost.css";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const styles = {
  "&.MuiButton-outlined": {
    color: "gray",
    border: 1
  }
};

const NewPost = () => {
  return (
    <div className="npTitleWrapper">
      <h1 className="npTitle">New Post</h1>
      <div className="npFormContainer">
        <Grid container spacing={2} justify="space-around" md>
          <Grid item xs={12}>
            <div className="npTableElementTitleForum">
              <TextField required fullWidth id="outlined-basic" label="Title" variant="outlined" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="npTableElementTitleForum">
              <FormControl required fullWidth>
                <InputLabel id="npForumSelectionLabel">Select the forum of your post</InputLabel>
                <Select
                  labelId="npForumSelectionLabel"
                  // value={forum}
                  label="Forum"
                  // onChange={handleChange}
                >
                  <MenuItem value={'todo'}>SOFTENG 701</MenuItem>
                  <MenuItem value={'todo'}>SOFTENG 754</MenuItem>
                  <MenuItem value={'todo'}>COMPSYS 726</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="npMainEditor">
              <TextField multiline required id="outlined-basic" label="Text Editor" variant="outlined" minRows={12} maxRows={12} fullWidth/>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="npUploadMedia">
              <Button sx={styles} label="Upload media" variant="outlined" component="label" endIcon={<AddPhotoAlternateIcon />}>Upload media<input type="file" hidden/></Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="npSubmitButton">
              <Button sx={styles} label="Post" variant="outlined">Post</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewPost;
