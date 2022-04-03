import {
  alpha,
  AppBar,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styles from "./NavBar-styles";
import React, { useCallback, useContext, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import logo from "../../assets/logo.svg";
import { useCommunities } from "../../hooks/useCommunities";
import { useMutation } from "../../hooks/useApi";

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
  width: 600,
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
  const { logout, authorized } = useContext(AuthContext);
  const { communities: communitiesMenu, loading: loadingForCommunities } =
    useCommunities();

  const pagesMenu = useMemo(
    () => [
      { label: "Home", link: "/" },
      { label: "Posts", link: "/posts" },
      { label: "Communities", link: "/communities" },
    ],
    []
  );

  const profileMenu = useMemo(
    () =>
      authorized
        ? [
            { label: "Profile", link: "/profile" },
            { label: "Settings", link: "/settings" },
            { label: "Logout", link: "/logout" },
          ]
        : [{ label: "Login / Create Account", link: "/login" }],
    [authorized]
  );

  const [anchorElCommunities, setAnchorElCommunities] = React.useState(null);
  const [anchorElPages, setAnchorElPages] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("searchValue", searchValue);
  }, [searchValue]);

  //call the endpoint
  const createLogout = useMutation("/users/logout", {
    method: "post",
  });

  const handleOpenCommunitiesMenu = (event) => {
    setAnchorElCommunities(event.currentTarget);
  };

  const handleCloseCommunitiesMenu = () => {
    setAnchorElCommunities(null);
  };

  const handleOpenPagesMenu = (event) => {
    setAnchorElPages(event.currentTarget);
  };

  const handleClosePagesMenu = () => {
    setAnchorElPages(null);
  };

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleLogoutClick = useCallback(async () => {
    setAnchorElProfile(null);

    await createLogout({});

    logout();
    localStorage.clear();
  }, [createLogout, setAnchorElProfile, logout]);

  const handleCloseMenu = useCallback(() => {
    setAnchorElProfile(null);
  }, [setAnchorElProfile]);

  if (loadingForCommunities) {
    return <div>Loading</div>;
  }
  return (
    <AppBar position="static" sx={styles.appBar} elevation={0}>
      <Toolbar sx={styles.headerContainer}>
        <div style={styles.headerSection}>
          <Link to=".">
            <img src={logo} alt="" style={styles.logo} />
          </Link>
          <HeaderButton onClick={handleOpenCommunitiesMenu}>
            <HeaderButtonLabel>Communities</HeaderButtonLabel>
            <PeopleIcon sx={styles.headerElementIcon} />
          </HeaderButton>
          <Menu
            sx={{ mt: 1 }}
            id="communities-menu"
            anchorEl={anchorElCommunities}
            keepMounted
            open={Boolean(anchorElCommunities)}
            onClose={handleCloseCommunitiesMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {communitiesMenu.length > 0 ? (
              communitiesMenu.map((community) => (
                <MenuItem
                  key={community.id}
                  onClick={() => navigate(`/Community/${community.id}`)}
                >
                  {community.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem onClick={handleCloseCommunitiesMenu}>
                No Communities
              </MenuItem>
            )}
          </Menu>

          <HeaderButton onClick={handleOpenPagesMenu}>
            <HeaderButtonLabel>Pages</HeaderButtonLabel>
            <BookmarkIcon sx={styles.headerElementIcon} />
          </HeaderButton>
          <Menu
            sx={{ mt: 1 }}
            id="profile-menu"
            anchorEl={anchorElPages}
            keepMounted
            open={Boolean(anchorElPages)}
            onClose={handleClosePagesMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {pagesMenu.map(({ label, link }, index) => (
              <MenuItem
                key={String(index)}
                onClick={() => {
                  handleClosePagesMenu();
                  navigate(link);
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>

          <HeaderButton>
            <HeaderButtonLabel>Filter</HeaderButtonLabel>
            <FilterAltIcon sx={styles.headerElementIcon} />
          </HeaderButton>
        </div>

        <SearchContainer>
          <StyledInputBase
            fullWidth
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </SearchContainer>

        <div style={styles.headerSection}>
          <HeaderButton
            onClick={() => {
              navigate("/newpost");
            }}
          >
            <AddIcon sx={styles.headerElementIcon} />
            <HeaderButtonLabel>New</HeaderButtonLabel>
          </HeaderButton>

          <HeaderButton onClick={handleOpenProfileMenu}>
            <PersonIcon sx={styles.headerElementIcon} />
            <HeaderButtonLabel>Profile</HeaderButtonLabel>
          </HeaderButton>
          <Menu
            sx={{ mt: 1 }}
            id="profile-menu"
            anchorEl={anchorElProfile}
            keepMounted
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElProfile)}
            onClose={handleCloseMenu}
          >
            {profileMenu.map(({ label, link }, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  link === "/logout"
                    ? handleLogoutClick()
                    : (() => {
                        handleCloseMenu();
                        navigate(link);
                      })();
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
