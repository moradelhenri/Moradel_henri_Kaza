import React, { useEffect, useState, useRef } from "react";
// import { useRef, useEffect, useState } from "react";
import "./Accordion.css";
import icon from "../assets/imgs/icon.png";
export default function Accordion(props) {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();
// use ref pour selectionner la hauteut d'un élement
  const refHeight = useRef()

  useEffect(() => {

      setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
      setToggle(!toggle)
  }


  return (
      // <div className="accordion">
//  partie visible 
// bouton  sur laquelle nous allons cliquer pour developper l'accordeon 
<div className="accordion">

<button 
onClick={toggleState}
className="accordion-visible">
  <h2>{props.Title}</h2> 
	
	  
        
          {/* <div  */}
          {/* onClick={toggleState} */}
          {/* className="accordion-visible "> */}
         
              <img 
              className={toggle  ?  "active"  :"icon"}
              src={icon} alt=" chevron" />
          </button>

          {/* partie bascule */}
          <div 
          className={toggle ? "accordion-toggle animated" : "accordion-toggle" }
        //   hauteur de defilement  des points actuelle
          style={{height: toggle ? `${heightEl}` : "0px"}}
          ref={refHeight}
          >
            {/* a des fins d"accessibilité pour caché ou rendre visible pour les lecteurs d'ecran */}
              <p aria-hidden = {toggle ? true : false}>
           {props.Text}
              </p>
          </div>
          
      </div>
  )
}
