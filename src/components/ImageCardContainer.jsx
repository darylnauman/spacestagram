import React from "react";
import ImageCard from "./ImageCard";

const ImageCardContainer = ({apods}) => {
    return (
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {apods.map((apod, index) => (
          <ImageCard key={index} title={apod.title} url={apod.url} explanation={apod.explanation} date={apod.date} />
        ))}
    </div>
    )
};

export default ImageCardContainer;