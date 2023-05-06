import React from 'react'
import { NavLink } from 'react-router-dom'
 import Header from '../components/Header'
import Footer from '../components/Footer'
// import aPropos from '../assets/imgs/aPropos.png'
import'./About.css';
import Accordion from '../components/Accordion';



function About() {
   



  return (
   
    <div>



    <Header/> 
        <NavLink/>
         <div className='apropos-picture'>
        </div>
        <div className='container-about-accordion'>
   
          <div>  <Accordion Title="Fiabilité" Text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/></div>
           <div className='box-respect'> <Accordion style={{ textAlign: "left" }} Title ="Respect"   Text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/></div>
           <div className='box-service'> <Accordion Title="Service" Text= " Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/></div>
            <Accordion Title="Sécurité" Text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
             En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/> 

</div>

<Footer/>

    </div>
  )
}

export default About