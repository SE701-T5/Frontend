import React, { useEffect, useState } from "react";
import "./profilePage.css";
import { Container, Modal } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PostPreviewComponent from "../../components/postPreviewComponent";
import { searchItem } from "../../util/searchUtil";
const posts = [
  {
    title: "yes",
    community: "Softeng701",
    upi: "abcd123",
    time: "12:12",
    postID: "randomID1",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "no",
    community: "Softeng751",
    upi: "shfdj364",
    time: "12:12",
    postID: "randomID2",
    text: "High performance computing seems pretty interesting, but also difficult to learn. Also how do you even pronounce parallelisation",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "hi",
    community: "Compsys701",
    upi: "das8089",
    time: "12:12",
    postID: "randomID3",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
  {
    title: "title4",
    community: "Softeng701",
    upi: "sass2364",
    time: "12:12",
    postID: "randomID4",
    text: "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...",
    upvotes: 24,
    downvotes: 23,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU",
      "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg",
    ],
  },
];
const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //creating a state for filtered results
  const [filteredResults, setFilteredResults] = useState(posts);

  //creating a state for search query in searchbar
  const [searchQuery, setSearchQuery] = useState("");

  //handle change password/email modal opening
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="sm">
      {/* Just a ad-hoc button, feel free to change */}
      <button onClick={() => setOpen(true)}>Change Email/Password</button>
      <ChangeModal open={open} handleClose={() => setOpen(false)} />
      <Box className="p-toprow" style={{ marginBottom: "20px" }}>
        <h1 className="p-title">Post Search</h1>
      </Box>
      <Box className="p-search">
        <FormControl className="p-searchbar" variant="filled">
          <InputLabel htmlFor="search">Search Posts</InputLabel>
          <OutlinedInput
            id="search"
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
            //when user inputs something into the search bar this calls the searchItem function to filter out the posts
            //based on the input
            onChange={(e) =>
              searchItem(
                e.target.value,
                posts,
                setSearchQuery,
                setFilteredResults
              )
            }
          />
        </FormControl>
      </Box>
      <Box className="p-toprow">
        <h1 className="p-title">Post History</h1>
      </Box>
      {searchQuery.length > 0 && (
        <p>
          <b>
            {filteredResults.length} results found based on search query "
            {searchQuery}"
          </b>
        </p>
      )}
      {filteredResults &&
        filteredResults.map((post) => (
          <Box className="p-post">
            <PostPreviewComponent post={post} />
          </Box>
        ))}
    </Container>
  );
};

function ChangeModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute w-3/4 h-full max-w-3xl p-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-auto md:w-full">
        <div className="relative bg-gray-100 shadow rounded-3xl">
          <div className="grid pt-5 sm:border-r-1 md:grid-cols-2">
            <div className="py-5 border-gray-300 border-dashed md:border-r-2">
              <div className="flex flex-col gap-2 px-1 mx-8">
                <div className="flex flex-row justify-center pb-2 text-lg font-bold text-primary-blue">
                  Change Login Email
                </div>
                <input
                  className="block w-full h-8 px-4 py-3 mb-6 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  placeholder="Old Email"
                />
                <input
                  className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  placeholder="New Email"
                />
                <input
                  className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  placeholder="Confirm New Email"
                />
                <button className="h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue">
                  Submit!
                </button>
              </div>
            </div>
            <div className="py-5">
              <div className="flex flex-col gap-2 px-1 mx-8">
                <div className="flex flex-row justify-center pb-2 text-lg font-bold text-primary-blue">
                  Change Login Email
                </div>
                <input
                  className="block w-full h-8 px-4 py-3 mb-6 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  type="password"
                  placeholder="Old Password"
                />
                <input
                  className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
                  type="password"
                  placeholder="Confirm New Password"
                />
                <button className="h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue">
                  Submit!
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button className="w-full h-8 mx-8 mt-2 mb-10 font-bold text-gray-500 bg-white shadow-lg rounded-xl md:w-2/5">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProfilePage;
