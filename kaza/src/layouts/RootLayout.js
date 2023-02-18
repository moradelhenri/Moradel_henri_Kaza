import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {

  return (
    <div className='Root-Layout'>


 <NavLink to="/Home"></NavLink> 
 <NavLink to="Fiche"></NavLink> 
<NavLink to="About"></NavLink> 





<main>
<Outlet />

</main>

    </div>
  )
}

export default RootLayout