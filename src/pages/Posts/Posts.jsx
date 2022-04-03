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
import { useApi } from "../../hooks/useApi";

const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { data: posts, loading: loadingForPosts } = useApi("/posts", {});

  const navigate = useNavigate();

  const { filteredResults, searchQuery, setSearchQuery } = useSearchItem(posts);

  if (loadingForPosts) {
    return <>loading</>;
  }

  return (
    <Container maxWidth="md">
      <div className="p-titleContainer">
        <h1 className="com-title">Posts</h1>
        <Button
          variant="contained"
          // todo fix this button style
          // style={buttonStyle}
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
      </div>
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
          {filteredResults?.length} results found based on search query "
          {searchQuery}"
        </p>
      )}
      {filteredResults &&
        filteredResults.map((post, index) => (
          <Box className="p-post" key={index}>
            <PostPreviewComponent post={post} />
          </Box>
        ))}
    </Container>
  );
};

export default Posts;
