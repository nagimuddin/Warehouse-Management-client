import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="items-title">This is our stock items</h1>
          <div className="items-container">
            {items.map((item) => (
              <Item key={item._id} item={item}></Item>
            ))}
          </div>
        </div>
        <div className="col-12 text-center">
          <Link Link to='/manage-items' className="btn btn-danger my-4 px-5">Manage Items</Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
