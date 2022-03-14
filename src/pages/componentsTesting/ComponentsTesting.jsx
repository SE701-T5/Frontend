import React from "react";
import PostPreviewComponent from "../../components/postPreviewComponent";
import { Container } from "@mui/material";

const ComponentsTesting = () => {
  return (
    <Container>
      <h1>ComponentsTesting</h1>
      <PostPreviewComponent post={{
        title: "How do I use Semantic UI?", community: "SOFTENG701", upi: "tvo465", time: "19:58", text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...", upvotes: 60, downvotes: 50
      }} />
    </Container>);
};

export default ComponentsTesting;
