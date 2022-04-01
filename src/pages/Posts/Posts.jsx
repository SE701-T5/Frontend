import React, { useEffect } from "react";
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
const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { filteredResults, searchQuery, setSearchQuery } = useSearchItem(posts);

  return (
    <Container maxWidth="md">
      <Box className="p-toprow">
        <h1 className="p-title">Posts</h1>
        <Box className="p-postbutton">
          <Button variant="contained" onClick={() => navigate("/newpost")}>
            New Post
          </Button>
        </Box>
      </Box>
      <hr style={{ border: "3px solid white" }} />
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
        filteredResults.map((post) => (
          <Box className="p-post">
            <PostPreviewComponent post={post} />
          </Box>
        ))}
    </Container>
  );
};

export default Posts;
