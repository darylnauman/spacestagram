import React from "react";

const Card = ({title, url}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt={title} />
    </div>
  );
}

export default Card;