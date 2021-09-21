import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({onLike, isLiked}) => {
  
  
  return (
    <Box sx={{mx: 'auto', textAlign: 'right', p:0}}>
      <IconButton onClick={onLike} aria-label="add to favorites">
        {isLiked ?
        <FavoriteIcon sx={{color: "Red", pr:1, pb:1}} fontSize="large"/>
        :
        <FavoriteBorderIcon sx={{color: "Red", pr:1, pb:1}} fontSize="large"/>
        }
      </IconButton>
  </Box>
  );
}

export default LikeButton;
