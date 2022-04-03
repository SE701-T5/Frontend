import React, { useCallback } from "react";
import "./postPreviewComponent.css";
import {
  ArrowUpward,
  ArrowDownward,
  AddComment,
  Link,
} from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const PostPreviewComponent = ({ post, style }) => {
  const {
    title,
    community,
    updatedAt,
    bodyText,
    upVotes,
    downVotes,
    attachments, //todo still need work
    id,
  } = post;

  const navigate = useNavigate();

  const getDateString = useCallback((UTCDateString) => {
    var difference = new Date(UTCDateString).getTime() - new Date().getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24));

    return new Intl.RelativeTimeFormat("en", {
      style: "long",
      localeMatcher: "lookup",
      numeric: "auto",
    }).format(days, "day");
  }, []);

  return (
    <Box className="ppc-postArea" style={style}>
      <Box>
        <Box className="ppc-row1">
          <Box>
            <h5 className="ppc-course">{community.name}</h5>
          </Box>

          <Box className="ppc-right">
            <Box>
              <p className="ppc-timeposted">{getDateString(updatedAt)}</p>
            </Box>
          </Box>
        </Box>

        <Box className="ppc-row2">
          <h2
            className="ppc-title"
            onClick={() => {
              navigate(`/post/${id}`);
            }}
          >
            {title} <Link className="ppc-link-icon" />
          </h2>
          <Box>
            <p className="ppc-text">{bodyText}</p>
          </Box>
        </Box>
      </Box>

      <Carousel dynamicHeight showThumbs={false} autoPlay infiniteLoop>
        {attachments?.map((image, index) => {
          return (
            <Box key={index}>
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

          <p className="ppc-numofvotes">{upVotes - downVotes}</p>

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
              navigate(`/post/${id}`);
            }}
          >
            Comment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostPreviewComponent;
