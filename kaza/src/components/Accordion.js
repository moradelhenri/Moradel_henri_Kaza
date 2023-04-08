import React, { useEffect, useState, useRef } from "react";
// import { useRef, useEffect, useState } from "react";
import "./Accordion.css";
import icon from "../assets/imgs/icon.png";
export default function Accordion(props) {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef()

  useEffect(() => {

      setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
      setToggle(!toggle)
  }


  return (
      <div className="accordion">

          <button 
          onClick={toggleState}
          className="accordion-visible">
            <h2>{props.Title}</h2>  
              <img 
              className={toggle  ?  "active": "icon"}
              src={icon} />
          </button>
          
          <div 
          className={toggle ? "accordion-toggle animated" : "accordion-toggle" }
          style={{height: toggle ? `${heightEl}` : "0px"}}
          ref={refHeight}
          >
              <p aria-hidden = {toggle ? true : false}>
           {props.Text}
              </p>
          </div>
          
      </div>
  )
}
