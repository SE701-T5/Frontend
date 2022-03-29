import React, { useEffect } from "react";
import "./homepage.css";
import Container from "@mui/material/Container";
import PopularCommunity from "../../components/PopularCommunity/PopularCommunity.jsx";
import Grid from "@mui/material/Grid";
import PostPreviewComponent from "../../components/postPreviewComponent/PostPreviewComponent.jsx";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postPreviews = [
    {
      title: "How to make a website",
      community: "UofA",
      upi: "UofA-12345",
      time: "1 hour ago",
      postID: "randomID1",
      text: "Aliquam eget ligula ac velit pellentesque malesuada ut in dolor. Nullam tempus enim non laoreet molestie. Phasellus ac lorem diam. Fusce congue lectus in mattis sodales. Sed at interdum nibh",
      upvotes: "12",
      downvotes: "3",
      images: [
        "https://picsum.photos/400/300",
        "https://picsum.photos/400/300",
      ],
    },
    {
      title: "What is this website?",
      community: "SOFTENG 352",
      upi: "khar193",
      time: "2 hours ago",
      postID: "randomID2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius placerat elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non metus sapien. Nunc aliquet eget ipsum quis rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed rutrum auctor libero ac tincidunt.",
      upvotes: "53",
      downvotes: "2",
      images: [
        "https://picsum.photos/400/300",
        "https://picsum.photos/400/300",
        "https://picsum.photos/400/300",
      ],
    },
    {
      title: "Random title",
      community: "RAND 363",
      upi: "rand420",
      time: "12 hours ago",
      postID: "randomID3",
      text: "Morbi sed imperdiet enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet semper turpis. Donec condimentum tempus rhoncus. Curabitur sodales urna a diam condimentum, at hendrerit nulla cursus. Praesent fermentum ullamcorper facilisis.",
      upvotes: "1",
      downvotes: "13",
      images: [
        "https://picsum.photos/400/300",
        "https://picsum.photos/400/300",
        "https://picsum.photos/400/300",
      ],
    },
  ];

  return (
    <div className="hpHomePage">
      <Container maxWidth="md">
        <h1 className="hpTitle">Popular Communities</h1>
        <div className="hpDivide">
          <hr className="hpDivider"></hr>
        </div>
        <div className="hpContainer">
          {/* Placeholder for Scrollable Popular Communities components - grid to be replaced*/}
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <PopularCommunity
                name="SOFTENG 701"
                alt="SOFTENG 701"
                image={require("./SOFTENG701.png")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PopularCommunity
                name="SOFTENG 754"
                alt="SOFTENG 754"
                image={require("./SOFTENG754.png")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PopularCommunity
                name="COMPSYS 726"
                alt="COMPSYS 726"
                image={require("./COMPSYS726.png")}
              />
            </Grid>
          </Grid>
        </div>
        <br></br>
        <h1 className="hpTitle">Popular Posts</h1>
        <div className="hpDivide">
          <hr className="hpDivider"></hr>
        </div>
        <div className="hpContainer">
          {postPreviews.map((post, idx) => (
            <PostPreviewComponent
              post={post}
              style={{ margin: "20px 0" }}
              key={idx}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
