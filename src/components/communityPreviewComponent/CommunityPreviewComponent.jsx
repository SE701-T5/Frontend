import React from "react";
import "./communityPreviewComponent.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";

const cardStyle = {
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
  media: {
    minheight: "210px",
    height: "100%",
    width: "100%",
  },
  margin: "20px 0",
  position: "relative",
  cursor: "pointer",
};

const buttonStyle = {
  backgroundColor: "#4f72aa",
};

const CommunityPreviewComponent = ({ communityEntry }) => {
  const { name, memberCount, description, img, id } = communityEntry;

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/Community/" + id)}
      style={cardStyle}
      className=""
    >
      <Grid container spacing={1}>
        <Grid item xs={0} md={4} display={{ xs: "none", md: "block" }}>
          <CardMedia component="img" image={img} style={cardStyle.media} />
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="cpc-community">
                <Typography variant="h5">
                  <b>{name}</b>
                </Typography>
              </div>
              <div className="cpc-members">
                <b>Members: {memberCount}</b>
              </div>
            </div>
            <Typography variant="body">
              <div>
                {description}
                <p>Nau mai, haere mai ki {name}!</p>
              </div>
            </Typography>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Button
                onClick={(e) => e.stopPropagation()}
                variant="contained"
                style={buttonStyle}
              >
                Join
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CommunityPreviewComponent;
