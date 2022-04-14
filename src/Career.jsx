import React from "react";
import {Link} from 'react-router-dom'
import './career.css'
import List from "./List";
import Test1 from "./Test1";
import { useState, useNavigate } from "react";

function Career (){


    return <div>

        <div className="re-eng">
             <div className="re-eng1">
            <Link to='/'><a>« Openings at Axon Analytics Limited</a></Link>
             </div>
           <h2>React Engineer</h2> 
           <p>Location: Victoria Island, Lagos State, Nigeria<br/></p>
           <span>Full-time</span>
        </div>
           <div className="re-eng2">
           <p>We are seeking a confident, well organised and experienced accountant for our rapidly-growing technology-led online retail business in Nairobi. You will be a member of what will become a finance team of hardworking, dedicated staff and will play an integral role in our business. This is a reactive and proactive role that requires someone with the necessary relevant knowledge, attention to detail, strong organisational skills, good communication and telephone manner. As the first member of the team, you are expected to be both experienced to understand what needs to be done and be willing to roll up your sleeves and do it yourself.
              <br/><br/>
           Roles and Responsibilities</p> 
           <ul>
               <li>Be a qualified accountant – preferably two years post qualified with experience of working in a commercial and structured environment</li>
               <li>Have knowledge of application of International Financial Reporting Standards (IFRS)</li>
               <li>Have good IT skills and knowledge of Microsoft Office, especially in Excel</li>
               <li>Have experience of working with financial accounting package</li>
           </ul>
           </div>

    </div>
}

export default Career;