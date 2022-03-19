import React from "react";
import "./comment.css";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { Box, IconButton, Avatar } from "@mui/material";


const Comment = ({ comment }) => {

    return (
        <>
            <Box className="post-TopRow">
                <Box className="post-avatar">
                    <Avatar alt="name" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
                </Box>
                <Box className="post-details">
                    <p className="post-commentupi">{comment.commentupi}</p>
                    <p className="post-commenttime">{comment.commenttime}</p>
                </Box>
            </Box>

            <Box className="post-MiddleRow">
                <Box className="post-comment">
                    <p className="post-text">{comment.comment}</p>
                </Box>

            </Box>

            <Box className="post-LastRow">
                <Box className="post-votes">
                    <IconButton>
                        <ArrowUpward
                            sx={{
                                color: "rgba(0,128,167,0.35)",
                                "&:hover": { color: "#0080A7" },
                            }}
                        />
                    </IconButton>

                    <p className="post-numofvotes">{comment.commentupvotes - comment.commentdownvotes}</p>

                    <IconButton>
                        <ArrowDownward
                            sx={{
                                color: "rgba(0,128,167,0.35)",
                                "&:hover": { color: "#0080A7" },
                            }}
                        />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Comment