import React from "react";
import { Link } from 'react-router-dom'
import './list.css'
import { useState } from "react";
import ContentStrategist from './ContentStrategist';


function List (){
    
    
    return <div>
            <div className="active-box">
                 <div className="ca-list ca-list1">
                 <Link to='/career/'><h4>React Engineer</h4><p>Location: Victoria Island, Lagos State<span>Full-time</span></p></Link> 
                 </div>
                 <div className="ca-list ca-list1">
                 <Link to='/contentstrategist/'><h4>Content Strategist</h4><p>Location: Victoria Island, Lagos State<span>Full-time</span></p></Link> 
                 </div>
                 <div className="ca-list ca-list1">
                 <Link to='/career/'><h4>React Engineer</h4><p>Location: Victoria Island, Lagos State<span>Full-time</span></p></Link> 
                 </div>
             </div>
    </div>
}


export default List;