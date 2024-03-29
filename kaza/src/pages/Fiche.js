import React, { useEffect, useState } from "react";
import "../styles.css";
import { useParams   } from "react-router-dom";
//import Cards from "../components/Cards";
import axios from "axios";
 import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import Accordion from "../components/Accordion";
 import Footer from "../components/Footer";

function Fiche() {
  const [data, setData] = useState({});
  const { id } = useParams(); // fiche/id-de-la-fiche
  const tags = data && data.tags;
  const slides = data && data.pictures;

  const Description = data && data.description;
  const Equipments = data && data.equipments;

  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json?")
  
      .then((res) => {
        const ficheData = res.data.find((x) => x.id === id);
        console.log(ficheData);
        setData(ficheData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return ( "http://localhost:3000",
    <div className="housing_sheet">
       <Header /> 
      {data.id ? (
        <div className="name">
          <ImageSlider slides={slides} />
          <div className="name-container-fill">
            <h1 className="name-container-title">{data.title}</h1>
            <h3 className="name-container-location">{data.location}</h3>
            <div className="boxTag">
              {tags.map((tag) => (<span className="font_box-tag">
                <Tag key={tag} tag={tag} /></span>
              ))}
            </div>
            <div className="name_host"> 
           
              <img  className="host_owner_picture"
                src={data?.host.picture}
                
                alt="Propriétaire"/>
              

              <div className="name__host"><span className="name__host_name">{data?.host.name}</span></div>
            </div>

            <div className="starBox">
              <Stars elem={data.rating} />
              
            </div>

            <div className="wapper_accordion">
              <div className=" accordion">
                
                 <div className="box-description">
                  <Accordion Title="Description" Text={Description} />
                
                                <div className="box-equipement">
                  <Accordion Title="Equipements" Text={Equipments} />
                </div>

               
              </div>
            </div>
            
            </div>
          </div>
          <div className="box_fiche_footer"> <Footer/></div>
        </div>
      ) : null}  
     
       
      ;
   
      
    </div>
  );
}

export default Fiche;
