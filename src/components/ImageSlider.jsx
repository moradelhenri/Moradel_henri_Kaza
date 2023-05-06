import { useState } from "react";
import left from "../assets/imgs/vector-left.svg";
import right from "../assets/imgs/vector-right.svg";



const ImageSlider= ({slides }) => {

const [current, setCurrent] = useState(0); //initiation de l'index à zéro
const length = slides.length; // longueur du tableau de slides

const isFirstSlide = () => {
   setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
};
const isLastSlide = () => {
   setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
};

return (
<section id="carrousel-container">
      {length > 1 && (
         <img
            src={left} //Affichage des flèches si length > 1
            alt="gauche"
            onClick={isLastSlide}
            className="leftArrowStyles"
         />
      )}
      {length > 1 && (
         <img
            src={right}
            alt="droite"
            onClick={isFirstSlide}
            className="rightArrowStyles"
         />
      )}
      {slides.map((slide, index) => (
         <div className="boxSlider"
            key={index} 
         >
            {index === current && <div className="box-imgSlider"> <img className="imgSlider"  src={slide} alt="logement à louer" /> </div>}
         
            {index === current && (
               <span className="slider__number">
                  {current + 1}/{length}
               </span>
            )}
         </div>
      ))}
   </section>
);
}
export default ImageSlider