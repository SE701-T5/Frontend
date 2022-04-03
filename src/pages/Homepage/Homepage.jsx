import React, { useEffect } from "react";
import "./homepage.css";
import Container from "@mui/material/Container";
import PopularCommunity from "../../components/PopularCommunity/PopularCommunity.jsx";
import Grid from "@mui/material/Grid";
import PostPreviewComponent from "../../components/postPreviewComponent/PostPreviewComponent.jsx";
import { useApi } from "../../hooks/useApi";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { data: dataForPosts, loading: loadingForPosts } = useApi("/posts", {});
  let { data: dataForCommunities, loading: loadingForCommunities } = useApi(
    "/communities",
    {}
  );

  // Will only populate post previews when
  // both the posts and communities data have arrived
  let postPreviews = [];
  let popularCommunities = [];
  if (!loadingForPosts && !loadingForCommunities) {
    postPreviews = dataForPosts;
    popularCommunities = dataForCommunities;
  }

  const findCommunityName = (communityID) => {
    const community = dataForCommunities.find((community) => {
      return community.id === communityID;
    });
    return community ? community.name : "Invalid Community";
  };

  return (
    <div className="hpHomePage">
      <Container maxWidth="md">
        <h1 className="hpTitle pb-2">Popular Communities</h1>
        <div className="hpDivide">
          <div className="hpDivider"></div>
        </div>
        <div className="hpContainer">
          {/* Placeholder for Scrollable Popular Communities components - grid to be replaced*/}

          <Grid container spacing={2} justifyContent="center">
            {popularCommunities?.slice(0, 3).map((community, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PopularCommunity
                  name={community.name}
                  id={community.id}
                  alt="SOFTENG 701"
                  image={require("./SOFTENG701.png")}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <br></br>
        <h1 className="hpTitle pb-2">Popular Posts</h1>
        <div className="hpDivide">
          <div className="hpDivider"></div>
        </div>
        <div className="hpContainer">
          {postPreviews?.map((post, index) => {
            return (
              <PostPreviewComponent
                key={index}
                post={post}
                style={{ margin: "20px 0" }}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
