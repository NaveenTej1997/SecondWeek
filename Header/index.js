import React from 'react';
import './style.css';
/** 
 * @author
 * @function
 **/

const Header=props=>{
        return(
              <header className="header">
                    
                    
                      <div className="login">
                        <a href="#">Login</a>
                      </div>
                      <br/>
                      <div className="search">
                <input type="search" placeholder="search" size="30"></input>
                      </div>
                      
              </header>
        );
}
export default Header;