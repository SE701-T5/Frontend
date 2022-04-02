import React from "react";
import "./communityPreviewComponent.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const cardStyle = {
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
  height: "12vw",
  media: {
    height: "100%",
    width: "100%",
  },
  margin: "20px 0",
  position: "relative",
};

const buttonStyle = {
  backgroundColor: "#4f72aa",
  float: "right",
  position: "absolute",
  bottom: "5%",
  right: "1%",
};

const CommunityPreviewComponent = ({ communityEntry }) => {
  const { community, members, description, image } = communityEntry;

  return (
    <Card style={cardStyle}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CardMedia component="img" image={image} style={cardStyle.media} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">
            <div className="cpc-community">
              <b>{community}</b>
            </div>
          </Typography>
          <Typography variant="body">
            <div className="cpc-members">
              <b>Members: {members}</b>
            </div>
          </Typography>
          <br></br>{" "}
          {/* 3 br tags are currently the only way I can find to format this correctly */}
          <br></br>
          <br></br>
          <Typography variant="body">
            <div className="cpc-description">
              {description}
              <p>Nau mai, haere mai ki {community}!</p>
            </div>
          </Typography>
          <Button variant="contained" style={buttonStyle}>
            Join
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Card>
  );
};

export default CommunityPreviewComponent;
