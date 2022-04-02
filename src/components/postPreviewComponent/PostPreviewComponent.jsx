import React from "react";
import "./postPreviewComponent.css";
import { ArrowUpward, ArrowDownward, AddComment } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const PostPreviewComponent = ({ post, style }) => {
  const {
    title,
    community,
    upi,
    time,
    text,
    upvotes,
    downvotes,
    images,
    postID,
  } = post;

  const navigate = useNavigate();

  return (
    <Box className="ppc-postArea" style={style}>
      <Box
        className="ppc-postInfo"
        onClick={() => {
          navigate(`/post/${postID}`);
        }}
      >
        <Box className="ppc-row1">
          <Box>
            <h5 className="ppc-course">{community}</h5>
          </Box>

          <Box className="ppc-right">
            <Box>
              <h5 className="ppc-upi">{upi}</h5>
            </Box>

            <Box>
              <h5 className="ppc-timeposted">{time}</h5>
            </Box>
          </Box>
        </Box>

        <Box className="ppc-row2">
          <h2 className="ppc-title">{title}</h2>
          <Box>
            <p className="ppc-text">{text}</p>
          </Box>
        </Box>
      </Box>

      <Carousel
        className="carousel"
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
      >
        {images.map((image, idx) => {
          return (
            <Box key={idx}>
              <img alt="uoaimage" src={image} />
            </Box>
          );
        })}
      </Carousel>

      <Box className="ppc-row3">
        <Box className="ppc-votes">
          <IconButton>
            <ArrowUpward
              sx={{
                color: "rgba(0,128,167,0.35)",
                "&:hover": { color: "#0080A7" },
              }}
            />
          </IconButton>

          <p className="ppc-numofvotes">{upvotes - downvotes}</p>

          <IconButton>
            <ArrowDownward
              sx={{
                color: "rgba(0,128,167,0.35)",
                "&:hover": { color: "#0080A7" },
              }}
            />
          </IconButton>
        </Box>

        <Box>
          <Button
            variant="outlined"
            startIcon={<AddComment />}
            onClick={() => {
              navigate(`/post/${postID}`);
            }}
            sx={{ color: "#4f72aa" }}
          >
            Comment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostPreviewComponent;
