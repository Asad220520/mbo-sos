import React from 'react'
import vector from "../../img/Vector.png";
// import vector1 from "../../img/Vector 1.png";
import vector2 from "../../img/Vector 1.png";
import vector3 from "../../img/Vector 2.png";
import vector4 from "../../img/Vector 3.png";
import vector5 from "../../img/Rectangle 15.png";
import vector6 from "../../img/Rectangle 14.png";

import  "./puzl.scss";







const Puzl = () => {
  return (
   <section id="puzl">
    <div className="container">
      <div className="puzl">
        <img src={vector} alt="" className='vector' />

          <img src={vector2} alt="" className='vector1'/>
            <img src={vector3} alt="" className='vector2' />
           <img src={vector4} alt="" className='vector3' />
          <img src={vector5} alt="" className='vector4' /> 
          <img src={vector6} alt="" className='vector5' /> 





      </div>
    </div>
   </section>
  )
}

export default Puzl