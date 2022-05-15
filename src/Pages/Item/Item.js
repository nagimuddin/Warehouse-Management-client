import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { img, price, name, powerdBy, about } = item;
  return (
    <div className="item">
      <img src={img} alt="" />
      <h1 className="name">{name}</h1>
      <h3 className="p-by">Powerd By: {powerdBy}</h3>
      <p className="price">Price: {price}</p>
      <p>
        <small className="about">About: {about}</small>
      </p>
      <div>
        <Link to="/items/:itemId" className="btn btn-danger my-4 px-5">
         Manage
        </Link>
      </div>
    </div>
  );
};

export default Item;
