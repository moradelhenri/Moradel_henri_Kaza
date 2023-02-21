
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import axios from "axios";
import Header from "../components/Header";

function Fiche() {
  const [data, setData] = useState({});
  const { id } = useParams(); // fiche/id-de-la-fiche

  useEffect(() => {
    axios
      .get("../data/data.json")
      .then((res) => {
        const ficheData = res.data.find((x) => x.id === id);
        console.log(ficheData);
        setData(ficheData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="housing_sheet">
      <Header />

      {data.id ? (
        <div className="name">
          <Cards
            cover={data.cover}
            title={data.title}
            description={data.description}
          />
          <p>{data.title}</p>
          <div><ul>
            {data.tags.map((tag) => (
              <li key={tag}><mark>{tag}</mark></li>
          
            ))} 
             console.log(tag.[])
            </ul>
         
          </div>

          <p>{data.id}</p>
          <p>{data.cover}</p>         
          <p>{data.description}</p>
          <p>{data.pictures}</p>
          <p>{data.rating}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Fiche;
