import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
function HomePage() {
  const [data, setData] = useState();
  function getData() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d31d7724ad474edfbb72f926141ae5e8`
      )
      .then((response) => setData(response));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className="homepage">
      <div className="banner">
        <img src="gazafree.jpg"></img>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default HomePage;
