import React from "react";
import "./hider.css"
import { BrowserRouter , Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Career from "./Career";
import { Link } from "react-router-dom";
import App from "./App";
import List from "./List";

function Test1  () {
    return <div>
       <div className="Test1">
          <h3 className="test1h3">What are you waiting for, come lets laugh and make memories</h3>
       </div>
       <div style={{padding:'30px'}} className="div2">
            <span></span>
            <h3>We are always looking for great talent</h3>
            <p> Click one of the links below to view Job Openings.</p>
        </div>
    </div>
}

export default Test1