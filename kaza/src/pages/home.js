
import Card from "../components/card";
import Header from "../components/Header";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "../styles.css";
import Footer from "../components/Footer";

function Home() {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => 
  {
    
   axios.get("http://localhost:3000/data.json") 
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
   <div className="box_section_galerie">
      {data.map((data, id) => (
        <li key={data.id} onClick={() => handleCardClick(data.id)}>
          <Card cover={data.cover} title={data.title} />
        </li>
      ))}

   

      </div>
       <Footer/> 
    </section>
  );
}

export default Home;
