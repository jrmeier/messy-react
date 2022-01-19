import React, { useState } from "react";

export const Card = ({ cardResults }) => {
  const [clicked, setIsClicked] = useState(false);
  const { name, image, type, brandName, price, storeName } = cardResults

  return (
    <div style={{ border: "1px solid black" }} onClick={() => setIsClicked(!clicked)}>
      {clicked && (
        <div>
          <p>Price: {price}</p>
          <p>{storeName}</p>
        </div>
      )}
      <h1>{name}</h1>
      <img
        alt="alt"
        src={image}
        style={{ maxWidth: 100, maxHeight: "auto" }}
      ></img>
      <p>{type}</p>
      <p>{brandName}</p>
    </div>
  );
}

export default Card;
