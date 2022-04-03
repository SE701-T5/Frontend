import React, { useEffect } from "react";
import "./post.css";
import Container from "@mui/material/Container";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReplyComponent from "./Reply";
import Comment from "../../components/comment/Comment";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const Post = ({ style }) => {
  const { id } = useParams();
  const { data, loading } = useApi(`/posts/${id}`, {});
  const {data: commentsData, loading: commentsLoading, mutate: refetchComments} = useApi(`/posts/${id}/comments`,{});

  let postData = [];
  let postTime = "";
  let communityName="";
  let commentsArray = [];
  let images = [];

  if (!loading && !commentsLoading) {
    postData = data;
    commentsArray = commentsData;
    const time = new Date(postData.updatedAt);
    postTime = time.toLocaleTimeString();
    communityName=data.community.name;
    images = postData.attachments
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Container maxWidth="md">
      <Box className="post-postArea" style={style}>
        <Box>
          <Box className="post-row1">
            <Box>
              <h5 className="post-course">{communityName}</h5>
            </Box>

            <Box className="post-right">
              <Box>
                <p className="post-timeposted">{postTime}</p>
              </Box>
            </Box>
          </Box>

          <Box className="post-row2">
            <h2 className="post-title">{postData.title}</h2>
            <Box>
              <p className="post-text">{postData.bodyText}</p>
            </Box>
          </Box>
        </Box>

        <Carousel dynamicHeight showThumbs={false} autoPlay infiniteLoop>
          {images?.map((image, index) => (
            <Box key={index}>
              <img alt="uoaimage" src={image} />
            </Box>
          ))}
        </Carousel>

        <Box className="post-row3">
          <Box className="post-votes">
            <IconButton>
              <ArrowUpward
                sx={{
                  color: "rgba(0,128,167,0.35)",
                  "&:hover": { color: "#0080A7" },
                }}
              />
            </IconButton>

            <p className="post-numofvotes">
              {postData.upVotes - postData.downVotes}
            </p>

            <IconButton>
              <ArrowDownward
                sx={{
                  color: "rgba(0,128,167,0.35)",
                  "&:hover": { color: "#0080A7" },
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="post-commentArea">
        <h3 className="post-comment">Comments</h3>
        {commentsArray.map((comment, index) => (
          <Box key={index} className="comment">
            <Comment comment={comment} />
          </Box>
        ))}
        <ReplyComponent postId={id} refetchComments={refetchComments} />
      </Box>
    </Container>
  );
};

export default Post;
