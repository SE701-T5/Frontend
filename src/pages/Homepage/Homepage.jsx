import React from "react";
import "./homepage.css";
import Container from '@mui/material/Container';
import PopularCommunity from "../../components/PopularCommunity/PopularCommunity.jsx";
import Grid from '@mui/material/Grid';

const Homepage = () => {
  return (
    <div className="hpHomePage">
      <h1 className="hpTitle">NavBar</h1> {/* Placeholder for Navbar component - to be replaced */}
      <Container maxWidth="md">
        <h1 className="hpTitle">Popular Communities</h1>
        <div className="hpDivide">
          <hr className="hpDivider"></hr>
        </div>
        <div className="hpContainer">
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
        </div>
        <br></br>
        <h1 className="hpTitle">Popular Posts</h1>
        <div className="hpDivide">
          <hr className="hpDivider"></hr>
        </div>
        <div className="hpContainer">
          <Container maxWidth="md">
            Popular posts feed in this container {/* Placeholder for Popular Posts card components - to be replaced */}
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
