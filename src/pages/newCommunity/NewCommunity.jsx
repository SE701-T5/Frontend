import React from "react";
import "./newCommunity.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState, useEffect } from "react";
const NewCommunity = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

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
            <div className="ncTextBox">
              {selectedFile && <img width="100%" height="100%" src={preview} />}
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
                <input type="file" hidden onChange={onSelectFile} />
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
