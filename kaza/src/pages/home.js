import Card from "../components/card";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios"
import "../styles.css";

function Home() {


const [data, setData] = useState([]);

useEffect(()=> {
  axios.get('../data/data.json')
  .then((res) => setData(res.data))
     .catch(err=>console.log(err))
      console.log(data);
   
  }, [])
  
  return (   
   
    <section>
<Header/>
      <div className="herobox">
        <h1 className="legend">Chez vous, partout et ailleurs</h1>
      </div>
      <ul
        className="box_section_galerie"
      
      >
       
        {
      //  data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
      </ul>{data.map((data, id) => (
         <li key={data.id}> 
         <Card cover={data.cover} title={data.title} /></li> 
         

        
        ))}

      <div>
   
    
      </div>
    </section>
  );
}



export default Home;