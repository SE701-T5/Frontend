import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./profilePage.css";

const ProfileSection = ({ setOpen, username, name, image }) => {
  const [editProfileClicked, setEditProfileClicked] = useState(false);
  const [nameForm, setNameForm] = useState("");
  const [usernameForm, setUserNameForm] = useState("");
  const editProfileHandler = () => {
    setEditProfileClicked(!editProfileClicked);
  };

  const handleChange = (e) => {
    setNameForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <aside className="w-full md:w-4/12 flex-none md:flex">
      <div className="mt-10 md:mt-14 md:w-min mx-auto">
        <Avatar
          alt="User Name"
          src={image}
          className="sm:w-40 rounded-full mx-auto"
          sx={{
            width: {
              xs: 160,
              sm: 180, // theme.breakpoints.up('sm')
              md: 220, // theme.breakpoints.up('md')
              lg: 240, // theme.breakpoints.up('lg')
            },
            height: {
              xs: 160,
              sm: 180, // theme.breakpoints.up('sm')
              md: 220, // theme.breakpoints.up('md')
              lg: 240, // theme.breakpoints.up('lg')
            },
          }}
        />
        <div className="md:flex ">
          {editProfileClicked ? (
            <Box>
              <div className="flex flex-col gap-2 mt-10 w-7/12 md:w-full mx-auto">
                <div>
                  <input
                    className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                    placeholder="Name"
                    defaultValue={name}
                    onChange={handleChange}
                  />
                  <input
                    className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                    placeholder="Username"
                    defaultValue={username}
                  />
                </div>

                <div>
                  <button
                    className="w-20 h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                  <button
                    className="w-20 ml-2 h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue"
                    onClick={editProfileHandler}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Box>
          ) : (
            <Box>
              <div className="text-center md:text-left">
                <Box style={{ marginTop: "25px" }}>
                  <h1 className="p-title text-xl font-medium font-extrabold">
                    {name}
                  </h1>
                </Box>
                <Box style={{ marginTop: "10px" }}>
                  <h1 className="p-title text-lg font-medium">{username}</h1>
                </Box>
              </div>
              <div className="text-center md:text-left">
                <Button
                  className="block w-8/12 md:w-full h-10 px-4 py-3 mb-6"
                  onClick={editProfileHandler}
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                  }}
                >
                  Edit Profile
                </Button>
                <Button
                  className="block w-8/12 md:w-full h-10 px-4 py-3 mb-6"
                  onClick={() => setOpen(true)}
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                  }}
                >
                  Change Email/Password
                </Button>
              </div>
            </Box>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSection;
