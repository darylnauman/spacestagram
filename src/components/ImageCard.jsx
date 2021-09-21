import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LikeButton from "./LikeButton";

const ImageCard = ({title, url, explanation}) => {
  
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked);
  }

  return (
    <Card sx={{width: 400, margin: 2, height: "auto" }}>
      
      <CardMedia
        component="img"
        height="200"
        image={url}
        alt={title}
      />

      <CardContent sx={{p:1, height: "fitContent"}}>
        <h2>{title}</h2>
        <p>{explanation}</p>
      </CardContent>

      <LikeButton onLike={handleClick} isLiked={isLiked}/>

    </Card>
  );
}

export default ImageCard;