import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { useSearchItem } from "../../hooks/useSearchItem";
import { Container, Modal, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PostPreviewComponent from "../../components/postPreviewComponent";
import ProfileSection from "./profileSection";
import ChangeModal from "./ChangeModal";
import { useApi } from "../../hooks/useApi";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: posts } = useApi("/users/34/posts", {});

  const { data: user, mutate } = useApi("/users/current", {});

  const { filteredResults, searchQuery, setSearchQuery } = useSearchItem(posts);

  //handle change password/email modal opening
  const [open, setOpen] = useState(false);

  if (!user) {
    return null;
  }

  const { displayName = "", username = "", image = null } = user;

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col flex-1 md:flex-row w-full">
        <ProfileSection
          setOpen={setOpen}
          username={username}
          name={displayName}
          image={image}
          update={mutate}
        />
        <div className="flex-grow">
          <main className="flex flex-col h-full max-w-2xl mx-10">
            <ChangeModal open={open} handleClose={() => setOpen(false)} />
            <div className="w-full flex-col mt-12">
              <h1 className="p-title pt-8 pb-4">Post History</h1>
              <div className="hpDivide">
                <div className="hpDivider"></div>
              </div>
              <FormControl className="p-searchbar" variant="filled">
                <InputLabel htmlFor="search">Search Posts</InputLabel>
                <OutlinedInput
                  id="search"
                  endAdornment={
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </FormControl>
              {searchQuery.length > 0 && (
                <p className="font-bold">
                  {filteredResults.length} results found based on search query "
                  {searchQuery}"
                </p>
              )}
              {filteredResults?.map((post) => (
                <Box className="p-post w-full">
                  <PostPreviewComponent post={post} />
                </Box>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
