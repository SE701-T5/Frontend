import React from "react";
import "./postPreviewComponent.css";
import { ArrowUpward, ArrowDownward, AddComment } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const PostPreviewComponent = ({ post }) => {
    const { title, community, upi, time, text, upvotes, downvotes, images } = post;

    return (
        <Box className="ppc-postArea">

            <Box>
                <Box className="ppc-row1">

                    <Box>
                        <h5 className="ppc-course">{community}</h5>
                    </Box>

                    <Box className="ppc-right">
                        <Box>
                            <p className="ppc-upi">{upi}</p>
                        </Box>

                        <Box>
                            <p className="ppc-timeposted">{time}</p>
                        </Box>
                    </Box>

                </Box>


                <Box className="ppc-row2">
                    <h2 className="ppc-title">{title}</h2>
                    <Box >
                        <p className="ppc-text">{text}</p>
                    </Box>
                </Box>
            </Box>

            <Carousel dynamicHeight showThumbs={false} autoPlay infiniteLoop>
                {
                    images.map(image => {
                        return (
                            <Box>
                                <img alt="uoaimage" src={image} />
                            </Box>
                        )
                    })
                }
            </Carousel>


            <Box className="ppc-row3">

                <Box className="ppc-votes">
                    <IconButton>
                        <ArrowUpward sx={{ color: "rgba(0,128,167,0.35)", "&:hover": { color: "#0080A7" } }} />
                    </IconButton>

                    <p className="ppc-numofvotes">{upvotes - downvotes}</p>

                    <IconButton>
                        <ArrowDownward sx={{ color: "rgba(0,128,167,0.35)", "&:hover": { color: "#0080A7" } }} />
                    </IconButton>

                </Box>

                <Box>
                    <Button variant="outlined" startIcon={<AddComment/>}>Comment</Button>
                </Box>
            </Box>



        </Box>);
};

export default PostPreviewComponent;
