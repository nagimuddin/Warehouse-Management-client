import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { img, price, name, year, powerdBy, about } = item;
  return (
    <div className="item">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h3>Powerd By: {powerdBy}</h3>
      <h4>Year: {year}</h4>
      <p>Price: {price}</p>
      <p>
        {" "}
        <small>About: {about}</small>
      </p>
      <div className="button">
        <Link to="/items">
         
        </Link>
      </div>
    </div>
  );
};

export default Item;
