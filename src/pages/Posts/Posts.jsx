import React, { useEffect, useState } from "react";
import "./posts.css";
import Container from "@mui/material/Container";
import { Search } from "@mui/icons-material";
import { useSearchItem } from "../../hooks/useSearchItem";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PostPreviewComponent from "../../components/postPreviewComponent";
import { searchItem } from "../../util/searchUtil";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    title: "yes",
    community: "Softeng701",
    upi: "abcd123",
    time: "12:12",
    postID: "randomID1",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "no",
    community: "Softeng751",
    upi: "shfdj364",
    time: "12:12",
    postID: "randomID2",
    text: "High performance computing seems pretty interesting, but also difficult to learn. Also how do you even pronounce parallelisation",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "hi",
    community: "Compsys701",
    upi: "das8089",
    time: "12:12",
    postID: "randomID3",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "title4",
    community: "Softeng701",
    upi: "sass2364",
    time: "12:12",
    postID: "randomID4",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
];

const buttonStyle = {
  backgroundColor: "#4f72aa",
  display: "inline-block",
  float: "right",
  position: "absolute",
  top: "0",
  right: "0",
};

const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { filteredResults, searchQuery, setSearchQuery } = useSearchItem(posts);

  return (
    <Container maxWidth="md">
      <div className="p-titleContainer">
        <h1 className="com-title">Posts</h1>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => navigate("/newpost")}
        >
          New Post
        </Button>
        <div className="p-Divide">
          <hr className="p-Divider"></hr>
        </div>
      </div>
      <br></br>
      <div className="p-bodyContainer">
        <Box className="p-search">
          <FormControl className="p-searchbar" variant="filled">
            <InputLabel htmlFor="search">Search Posts</InputLabel>
            <OutlinedInput
              id="search"
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
              //when user inputs something into the search bar this calls the searchItem function to filter out the posts
              //based on the input
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </FormControl>
        </Box>
        {searchQuery.length > 0 && (
          <p className="font-bold">
            {filteredResults.length} results found based on search query "
            {searchQuery}"
          </p>
        )}
        {filteredResults &&
          filteredResults.map((post, idx) => (
            <Box className="p-post" key={idx}>
              <PostPreviewComponent post={post} />
            </Box>
          ))}
      </div>
    </Container>
  );
};

export default Posts;
