import React, { useEffect } from "react";
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
  backgroundColor: "#059EF4",
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
      image: ["https://picsum.photos/400/300"],
    },
    {
      community: "SOFTENG 754",
      members: "28",
      description: "Advanced software requirements",
      image: ["https://picsum.photos/400/300"],
    },
    {
      community: "SOFTENG 750",
      members: "115",
      description:
        "React coding, what else can you want in life? Nothing much.",
      image: ["https://picsum.photos/400/300"],
    },
  ];

  return (
    <Container maxWidth="md">
      <div className="com-titleContainer">
        <h1 className="com-Title">Communities</h1>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => {
            navigate("/newcommunity");
          }}
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
            />
          </FormControl>
        </Box>
        <div className="com-result">
          <b>Based on search query "SOFTENG"</b>
        </div>
        {communityPreviews.map((communityEntry) => (
          <CommunityPreviewComponent communityEntry={communityEntry} />
        ))}
      </div>
    </Container>
  );
};

export default Communities;
