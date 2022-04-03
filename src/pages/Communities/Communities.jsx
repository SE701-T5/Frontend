import React, { useEffect, useState } from "react";
import "./communities.css";
import Container from "@mui/material/Container";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import CommunityPreviewComponent from "../../components/communityPreviewComponent/CommunityPreviewComponent.jsx";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  backgroundColor: "#4f72aa",
  display: "inline-block",
  float: "right",
  position: "absolute",
  top: "0",
  right: "0",
};

const Communities = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const communityPreviews = [
    {
      community: "SOFTENG 701",
      members: "150",
      description:
        "A fun project-driven course emphasising teamwork. This is a very cool course where you can learn lots of things from peers and lecturers.",
      image: "https://picsum.photos/400/300",
    },
    {
      community: "SOFTENG 754",
      members: "28",
      description: "Advanced software requirements",
      image: "https://picsum.photos/400/300",
    },
    {
      community: "SOFTENG 750",
      members: "115",
      description:
        "React coding, what else can you want in life? Nothing much.",
      image: "https://picsum.photos/400/300",
    },
  ];

  //creating a state for filtered results
  const [filteredResults, setFilteredResults] = useState(communityPreviews);

  //creating a state for search query in searchbar
  const [searchQuery, setSearchQuery] = useState("");

  //Function for filtering posts by title, community, text, or upi when user inputs text in the search bar, else all posts will be shown
  const searchItem = (searchValue) => {
    setSearchQuery(searchValue);
    if (searchValue !== "") {
      const filteredSearch = communityPreviews.filter((item) => {
        return (
          item.community.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredResults(filteredSearch);
    } else {
      setFilteredResults(communityPreviews);
    }
  };

  return (
    <Container maxWidth="md">
      <div className="com-titleContainer">
        <h1 className="com-title">Communities</h1>
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={() => navigate("/NewCommunity")}
        >
          New Community
        </Button>
        <div className="com-Divide">
          <hr className="com-Divider"></hr>
        </div>
      </div>
      <br></br>
      <div className="com-bodyContainer">
        <Box className="com-search">
          <FormControl className="com-searchbar" variant="filled">
            <InputLabel htmlFor="search">Search Posts</InputLabel>
            <OutlinedInput
              id="search"
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
              onChange={(e) => searchItem(e.target.value)}
            />
          </FormControl>
        </Box>
        {searchQuery.length > 0 && (
          <p>
            <b>
              {filteredResults.length} results found based on search query "
              {searchQuery}"
            </b>
          </p>
        )}
        {filteredResults &&
          filteredResults.map((communityEntry, idx) => (
            <CommunityPreviewComponent
              communityEntry={communityEntry}
              key={idx}
            />
          ))}
      </div>
    </Container>
  );
};

export default Communities;
