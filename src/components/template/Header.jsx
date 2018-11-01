import './Header.css'
import React from 'react'
import Home from  '../../assets/imgs/icons8-casa-50.png'

export default props =>
 <header className="header flex-column">
       <h2 className="mt-3">
         <img src={Home} al="Home" /> {props.title}
       </h2>
 </header>
