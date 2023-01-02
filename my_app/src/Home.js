import React from 'react'
import {Link} from "react-router-dom";
import "./Assets/Home.css"


import Logo from "./Assets/Bank_Asia_Logo.jpg"

export default function Home() {
  return (
    <div>

        <div className="Box">
            <img src={Logo} alt="" />
            <h1>Agent Banking</h1>
            <h3>Shahapur Bazar, Chatkhil, Noakhali</h3>

            <Link className='Link' to="/Ac_Print_Test"> Account Details Print </Link>
            <Link className='Link' to="/ac_print"> Account Details Print Test</Link>
    
        </div>


    </div>
  )
}
