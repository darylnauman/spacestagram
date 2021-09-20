import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LikeButton from "./LikeButton";

const ImageCard = ({title, url, explanation}) => {
  
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked);
  }
  
  useEffect(()=> {
    console.log(isLiked)
  }, [isLiked])

  return (
    <Card sx={{maxWidth: 400, margin: 2}}>
      
      <CardMedia
        component="img"
        height="200"
        image={url}
        alt={title}
      />

      <CardContent sx={{p:1}}>
        <h2>{title}</h2>
        <p>{explanation}</p>
      </CardContent>

      <LikeButton onLike={handleClick} isLiked={isLiked}/>

    </Card>
  );
}

export default ImageCard;