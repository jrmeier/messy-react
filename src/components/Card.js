import React, { useState } from "react";

export const Card = ({ product }) => {
  const [clicked, setClicked] = useState(false);
  const { name, image, type, brandName, price, storeName } = product

  return (
    <div style={{ border: "1px solid black" }} onClick={() => setClicked(!clicked)}>
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
