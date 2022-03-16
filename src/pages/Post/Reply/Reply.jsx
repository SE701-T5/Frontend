import React from "react";
import "./reply.css";
import { Reply } from "@mui/icons-material";
import { Box, Button, Avatar, TextField } from "@mui/material";

const ReplyComponent = () => {

    return (
        <Box className="reply-replybox">
            <Box className="reply-avatar">
                <Avatar alt="name" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
            </Box>

            <TextField 
            
                fullWidth
                id="outlined-textarea"
                label="Your Reply"
                placeholder="Reply..."
                multiline
            />
            <Box className="reply-button">
                <Button variant="outlined" startIcon={<Reply />}>
                    Reply
                </Button>
            </Box>

        </Box>




    );


};

export default ReplyComponent;