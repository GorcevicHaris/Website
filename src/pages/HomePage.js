import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
import Post from "../components/Post";
function HomePage() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d31d7724ad474edfbb72f926141ae5e8`
      )
      .then((response) => setData(response.data.articles));
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log(data[0].source.id  );
  return (
    <div className="homepage">
      <div className="banner">
        <img src="gazafree.jpg"></img>
      </div>
      <div className="main">
        {data ? data.map((el) => <Post config={el} />) : <h1>nema podataka</h1>}
      </div>
    </div>
  );
}

export default HomePage;
