import React from "react";
import "./reply.css";
import { Reply } from "@mui/icons-material";
import { Box, Button, Avatar, TextField } from "@mui/material";

const ReplyComponent = () => {
  return (
    <Box className="reply-replybox">
      <Box className="reply-avatar">
        <Avatar
          alt="name"
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        />
      </Box>

      <TextField
        fullWidth
        id="outlined-textarea"
        label="Comment..."
        placeholder=""
        multiline
      />
      <Box className="reply-button">
        <Button
          variant="outlined"
          startIcon={<Reply />}
          sx={{ color: "#4f72aa" }}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export default ReplyComponent;
