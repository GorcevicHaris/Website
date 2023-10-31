import React from "react";
import "./data.css";
import { useLocation } from "react-router-dom";
export default function MoreData() {
  const { state } = useLocation();
  const product = state.data;
  console.log(product);
  return (
    <div className="container">
      <h1 style={{ color: "black" }}> {product.author}</h1>
      <h1>{product.title}</h1>
      <h1 style={{ color: "red" }}> {product.description}</h1>
    </div>
  );
}
