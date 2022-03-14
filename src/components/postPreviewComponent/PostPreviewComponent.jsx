import React from "react";
import "./postPreviewComponent.css";
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';


const PostPreviewComponent = ({ post }) => {
    const { title, community, upi, time, text, upvotes, downvotes } = post;

    return (
        <Box className="postArea">
            <Box>
                <Box className="row1">

                    <Box>
                        <h5 class="course">{community}</h5>
                    </Box>

                    <Box className="right">
                        <Box>
                            <p className="upi">{upi}</p>
                        </Box>

                        <Box>
                            <p className="timeposted">{time}</p>
                        </Box>
                    </Box>

                </Box>


                <Box className="row2">
                    <h2 className="title">{title}</h2>
                    <Box >
                        <p class="text">{text}</p>
                    </Box>
                </Box>
            </Box>



            <Box className="row3">

                <Box className="votes">
                    <IconButton>
                        <ArrowUpward sx={{ color: "rgba(0,128,167,0.35)", "&:hover": { color: "#0080A7" } }} />
                    </IconButton>

                    <p className="numofvotes">{upvotes - downvotes}</p>

                    <IconButton>
                        <ArrowDownward sx={{ color: "rgba(0,128,167,0.35)", "&:hover": { color: "#0080A7" } }} />
                    </IconButton>

                </Box>

                <Box>
                    <Button variant="text">Comments</Button>
                </Box>
            </Box>



        </Box>);
};

export default PostPreviewComponent;
