import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({onLike, isLiked}) => {
  
  
  return (
    <Box sx={{mx: 'auto', textAlign: 'right', p:0}}>
      <IconButton onClick={onLike} aria-label="add to favorites" sx={{pr:1, pb:1, m:1}}>
        {isLiked ?
        <FavoriteIcon sx={{color: "Red"}} fontSize="large"/>
        :
        <FavoriteBorderIcon sx={{color: "Red"}} fontSize="large"/>
        }
      </IconButton>
  </Box>
  );
}

export default LikeButton;
