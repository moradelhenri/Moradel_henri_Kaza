import React from 'react'
import { NavLink } from "react-router-dom";
import "./Page404.css";
function Page404() {
  return (
    <div className="page404">
            <h1 className='title-404'>404</h1>
            <span className="description">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="lien-home">Retourner sur la page d’accueil</NavLink>
        </div>
  )
}

export default Page404