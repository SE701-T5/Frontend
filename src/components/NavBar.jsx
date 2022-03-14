import {
  alpha,
  AppBar,
  Button,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
    height: 70,
    display: "flex",
    justifyContent: "center",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
  },
  logo: {
    height: 32,
    marginRight: 30,
  },
  headerSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
};

const HeaderButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  margin: "0 5px",
  height: "60%",
  borderRadius: 5,
  backgroundColor: alpha("#BBB8B8", 0.2),
  "&:hover": {
    backgroundColor: alpha("#000000", 0.1),
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 5px",
  },
  color: "black",
}));

const HeaderButtonLabel = styled(Typography)(({ theme }) => ({
  color: "black",
  marginRight: "5px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#BBB8B8", 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: 400,
  color: "black",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  margin: "0 5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 1),
    width: "100%",
  },
}));

function NavBar() {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.headerContainer}>
        <div style={styles.headerSection}>
          <img src="logo.svg" alt="" style={styles.logo} />
          <HeaderButton>
            <Typography variant="body1" sx={{ marginRight: "5px" }}>
              Communities
            </Typography>
            <ArrowDownwardIcon sx={{ height: "50%" }} />
          </HeaderButton>
          <HeaderButton>
            <Typography variant="body1" sx={{ marginRight: "5px" }}>
              Pages
            </Typography>
            <ArrowDownwardIcon sx={{ height: "50%" }} />
          </HeaderButton>
          <HeaderButton>
            <HeaderButtonLabel>Filter</HeaderButtonLabel>
            <FilterAltIcon sx={{ height: "50%" }} />
          </HeaderButton>
        </div>

        <SearchContainer>
          <StyledInputBase
            fullWidth
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </SearchContainer>

        <div style={styles.headerSection}>
          <HeaderButton>
            <AddIcon sx={{ height: "50%" }} />
            <HeaderButtonLabel sx={{ ["md"]: {} }}>New</HeaderButtonLabel>
          </HeaderButton>
          <HeaderButton>
            <PersonIcon sx={{ height: "50%" }} />
            <HeaderButtonLabel>Profile</HeaderButtonLabel>
          </HeaderButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
