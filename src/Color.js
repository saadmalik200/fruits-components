import React, { useEffect, useState } from "react";

import "./Color.css";
const colors = ["red", "blue", "green", "black", "purple"];
const Color = () => {
  const [color, setColor] = useState("red");
  const [hide, setHide] = useState(false);

  let handleChangeColor = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setColor(colors[newColor]);
  };

  const handleDelete = (event) => {
    //console.log(event.currentTarget.closest("div"));
    event.currentTarget.closest("div").classList.add("close");
  };

  return (
    <div className="container">
      <h1>Components</h1>
      <div className="card">
        <div className="fruit" id="apple">
          <h5 style={{ color: color }}>Orange</h5>
          <button
            className="change"
            onClick={() => {
              handleChangeColor();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: color }}>Apple</h5>
          <button
            onClick={() => {
              handleChangeColor();
            }}
            className="change"
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: color }}>Mango</h5>
          <button
            className="change"
            onClick={() => {
              handleChangeColor();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: color }}>Banana</h5>
          <button
            className="change"
            onClick={() => {
              handleChangeColor();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
        <div className="fruit">
          <h5 style={{ color: color }}>Cherry</h5>
          <button
            className="change"
            onClick={() => {
              handleChangeColor();
            }}
          >
            Change Color
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Color;
