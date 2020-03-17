import React from 'react';
import './style.css';
import {Link } from "react-router-dom";

const Button=(props)=>{
        return(
                
                <div className="btn-grp">
                <br/>
                <Link to="/">Home</Link>
                <Link to="./components/Forms/index.js">Admissions</Link>
                <a href="#">Training</a>
                <a href="#">Courses</a>
                </div>
        );
}
export default Button;