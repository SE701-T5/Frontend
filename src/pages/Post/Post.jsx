import React from "react";
import "./post.css";
import Container from "@mui/material/Container";
import { ArrowUpward, ArrowDownward, Reply, Close } from "@mui/icons-material";
import { Box, Button, IconButton, Avatar } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReplyComponent from "./Reply"


const Post = ({ style }) => {
    let community = "SOFTENG701";
    let upi = "shr23456";
    let time = "23:57";
    let title = "sjngosnhpmre";
    let text = "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips...";
    let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsGYUdnO7UWSuZV_wMfyq-ChTkvfHjMMUcA&usqp=CAU", "https://nz3.architecturemedia.net/site_media/media/cache/52/47/5247e80bab99158eecfb84da220fe7b1.jpg", "https://www.rcp.co.nz/wp-content/uploads/2019/09/LFGX4403E-1024x683.jpg"];
    let upvotes = 534;
    let downvotes = 352;
    let comment = "I love react and react libraries but I have never used Semantic UI...  I heard from a teammate  that it’s pretty easy to use and has a lot of documentation so hopefully I’ll be fine. Any tips for using this new frontend framework?";
    let commentupvotes = 456;
    let commentdownvotes = 352;
    let commentupi = "shr23456";
    let commenttime = "23:57";




    const [isShow, setIsShow] = React.useState(false);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <Container maxWidth="md">
            <Box className="post-postArea" style={style}>
                <Box>
                    <Box className="post-row1">
                        <Box>
                            <h5 className="post-course">{community}</h5>
                        </Box>

                        <Box className="post-right">
                            <Box>
                                <p className="post-upi">{upi}</p>
                            </Box>

                            <Box>
                                <p className="post-timeposted">{time}</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="post-row2">
                        <h2 className="post-title">{title}</h2>
                        <Box>
                            <p className="post-text">{text}</p>
                        </Box>
                    </Box>
                </Box>

                <Carousel dynamicHeight showThumbs={false} autoPlay infiniteLoop>
                    {images.map((image) => {
                        return (
                            <Box>
                                <img alt="uoaimage" src={image} />
                            </Box>
                        );
                    })}
                </Carousel>

                <Box className="post-row3">
                    <Box className="post-votes">
                        <IconButton>
                            <ArrowUpward
                                sx={{
                                    color: "rgba(0,128,167,0.35)",
                                    "&:hover": { color: "#0080A7" },
                                }}
                            />
                        </IconButton>

                        <p className="post-numofvotes">{upvotes - downvotes}</p>

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
            </Box>

            <Box className="post-commentArea">
                <Box className="post-TopRow">
                    <Box className="post-avatar">
                        <Avatar alt="name" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
                    </Box>
                    <Box className="post-details">
                        <p className="post-commentupi">{commentupi}</p>
                        <p className="post-commenttime">{commenttime}</p>
                    </Box>
                </Box>

                <Box className="post-MiddleRow">
                    <Box className="post-comment">
                        <p className="post-text">{comment}</p>
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

                        <p className="post-numofvotes">{commentupvotes - commentdownvotes}</p>

                        <IconButton>
                            <ArrowDownward
                                sx={{
                                    color: "rgba(0,128,167,0.35)",
                                    "&:hover": { color: "#0080A7" },
                                }}
                            />
                        </IconButton>
                    </Box>

                    <Box>
                        <Button onClick={handleClick} variant="outlined" startIcon={isShow ?
                            <Close/>:<Reply/> }>
                            {isShow ?
                                "Hide Reply":"Reply"    
                            }
                        </Button>

                    </Box>

                </Box>


                {isShow &&
                    <ReplyComponent />
                }




            </Box>

        </Container>



    );
};

export default Post;

