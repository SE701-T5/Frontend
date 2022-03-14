import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PopularCommunity = (props) => {
    const {name,alt,image}=props
  
    return (
    <Card sx={{ maxWidth: 345 }} raised='true'>
      <CardActionArea>
      <Grid container spacing={1} direction='column'>
        <Grid item>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.alt}
          />
        </Grid>
        <Grid item>
          <Typography variant="body">
            {props.name}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      </CardActionArea>
    </Card>
    );
  };
  
  export default PopularCommunity;