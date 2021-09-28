import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LikeButton from "./LikeButton";

const ImageCard = ({title, url, explanation, date}) => {
  
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked);
  }

  return (
    <Card sx={{width: 500, margin: 2 }}>
      
      <CardMedia
        component="img"
        height="35%"
        image={url}
        alt={title}
      />

      <CardContent sx={{px:3, height:"55%"}}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
      </CardContent>

      <LikeButton sx={{height:"10%"}} onLike={handleClick} isLiked={isLiked}/>

    </Card>
  );
}

export default ImageCard;