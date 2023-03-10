
import Card from "../components/card";
import Header from "../components/Header";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "../styles.css";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("../data/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(id) {
    navigate("fiche/" + id);
  }

  return (
    <section>
      <Header />

      <div className="herobox">
        <h1 className="legend">Chez vous, partout et ailleurs</h1>
      </div>

      {data.map((data, id) => (
        <li key={data.id} onClick={() => handleCardClick(data.id)}>
          <Card cover={data.cover} title={data.title} />
        </li>
      ))}

      <div></div>
    </section>
  );
}

export default Home;
