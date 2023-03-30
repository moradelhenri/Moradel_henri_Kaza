import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Cards from "../components/Cards";
import axios from "axios";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Tag from "../components/Tag";
function Fiche() {
  const [data, setData] = useState({});
  const { id } = useParams(); // fiche/id-de-la-fiche
  const tags = data && data.tags;

  const slides = data && data.pictures;
  const rating = data && data.rating

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
             <ImageSlider slides={slides} />
             <h1>{data.title}</h1>
             <h3>{data.location}</h3>
         <div className="boxTag">
          
          
         {tags.map((tag) => (
               <Tag key={tag}tag={tag} />
                 
               
              ))}
          
          
          </div>
         
           
              <div className="name_host">
                                    <span className="name__host">{data?.host.name}</span>
                                    <img className="host_owner_picture" src={data?.host.picture} alt="Propriétaire"/>
                                </div>

          <div>
          
            <p>{data.id}</p>
            <p>{data.description}</p>

   

            <p>{data.rating}</p>
          </div>
        </div>
      ) : null}
      ;
    </div>
  );
}

export default Fiche;
