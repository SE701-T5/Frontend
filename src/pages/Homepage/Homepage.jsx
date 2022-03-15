import React from "react";
import "./homepage.css";
import Container from '@mui/material/Container';
import PopularCommunity from "../../components/PopularCommunity/PopularCommunity.jsx";
import Grid from '@mui/material/Grid';

const Homepage = () => {
  return (
    <>
      <h1>NavBar</h1> {/* Placeholder for Navbar component - to be replaced */}
      <Container maxWidth="md">
        <h1>Popular Communities</h1>
        <div className="divide">
          <hr className="hpDivider"></hr>
        </div>
        <Container maxWidth="md">
          {/* Placeholder for Scrollable Popular Communities components - grid to be replaced*/}
          <Grid container spacing={5} justify="center">
            <Grid item xs={12} sm={6} md={4}>
              <PopularCommunity name="SOFTENG 701" alt="SOFTENG 701" image={require("./SOFTENG701.png")}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <PopularCommunity name="SOFTENG 754" alt="SOFTENG 754" image={require("./SOFTENG754.png")}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <PopularCommunity name="COMPSYS 726" alt="COMPSYS 726" image={require("./COMPSYS726.png")}/>
            </Grid>
          </Grid>
        </Container> 
        
        <br></br>
        <h1>Popular Posts</h1>
        <div className="divide">
          <hr className="hpDivider"></hr>
        </div>
        <Container maxWidth="md">
          Popular posts feed in this container {/* Placeholder for Popular Posts card components - to be replaced */}
        </Container>
      </Container>
    </>
  );
};

export default Homepage;
