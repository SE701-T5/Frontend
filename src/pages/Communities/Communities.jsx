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
import { useCommunities } from "../../hooks/useCommunities";

const buttonStyle = {
  backgroundColor: "#059EF4",
  display: "inline-block",
  float: "right",
  position: "absolute",
  top: "0",
  right: "0",
};

const Communities = () => {
  const { communities: communityPreviews, loading: loadingForCommunities } =
    useCommunities();

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredResults(filteredSearch);
    } else {
      setFilteredResults(communityPreviews);
    }
  };

  if (loadingForCommunities) {
    return <div>loading</div>;
  }

  return (
    <Container maxWidth="md">
      <div className="com-titleContainer">
        <h1 className="com-Title">Communities</h1>
        <Button
          variant="contained"
          style={buttonStyle}
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
            <InputLabel htmlFor="search">Search Communities</InputLabel>
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
          filteredResults.map((communityEntry) => (
            <CommunityPreviewComponent
              key={communityEntry.id}
              communityEntry={communityEntry}
            />
          ))}
      </div>
    </Container>
  );
};

export default Communities;
