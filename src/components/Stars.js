import React from 'react'
import starActive from "../assets/imgs/starActive.png"
import starInactive from "../assets/imgs/starInactive.png"
export default Stars

function Stars({ elem }) {

   
   const ratingStart = [1,2,3,4,5] 

return (
    <div className='iconStyle'>
{ratingStart.map(( index) => 

elem >= index ? (<img key={index} className='icon-style' src ={starActive} />  ) :  ( < img key={index} className='icon-style' src= {starInactive}  />
)  
)
  
  




 
 

  
   }

   
</div>
)}