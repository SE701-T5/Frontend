import React, { useState } from "react";
import "./posts.css";
import Container from "@mui/material/Container";
import { Search } from "@mui/icons-material";
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
    upi: "shfdj364",
    time: "12:12",
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
    upi: "shfdj364",
    time: "12:12",
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
    upi: "shfdj364",
    time: "12:12",
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
  const navigate = useNavigate();
  //creating a state for filtered results
  const [filteredResults, setFilteredResults] = useState(posts);

  //Function for filtering posts by title when user inputs text in the search bar, else all posts will be shown
  const searchItem = (searchValue) => {
    if (searchValue !== "") {
      const filteredSearch = posts.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.community.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.text.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredResults(filteredSearch);
    } else {
      setFilteredResults(posts);
    }
  };

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
            onChange={(e) => searchItem(e.target.value)}
          />
        </FormControl>
      </Box>

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
