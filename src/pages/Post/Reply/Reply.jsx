import React, { useState } from "react";
import "./reply.css";
import { Reply } from "@mui/icons-material";
import { Box, Button, Avatar, TextField } from "@mui/material";
import { useMutation } from "../../../hooks/useApi";

const ReplyComponent = (postId) => {
  const [text, setText] = useState("");

  const createNewComment = useMutation(`posts/${postId.postId}/comments`, {
    method: "post",
  });

  const handleCommentClick = async () => {
    await createNewComment({
      data: {
        bodyText: text,
      },
    });
  };

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
        onChange={(e)=>setText(e.target.value)}
      />
      <Box className="reply-button">
        <Button
          variant="outlined"
          startIcon={<Reply />}
          onClick={handleCommentClick}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export default ReplyComponent;
