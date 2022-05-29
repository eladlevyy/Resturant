import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
export default function Navbar() {
    return(
        <div>
<div className="mainnav ">
          <div className="contactinfo text-muted py-2">
  
            <div className="container ">
              <div className="row">
          
                <div className="col-md-4">
                <i className="fa fa-phone pr-2" aria-hidden="true"></i> + 1235 2355 98
                </div>
          
                <div className="col-md-4">
                      <i className="fa fa-paper-plane pr-2" aria-hidden="true"></i>youremail@email.com
                </div>
          
                <div className="col-md-4">
                  <span>
          
                    Open hours: Monday - Sunday 8:00AM - 9:00PM
                    </span>
                </div>
              </div>
            </div>
          </div>











          <nav className="navbar navbar-expand-lg navbar-light py-3   ">
       
            <div className="container">
                <Link className="navbar-brand text-white logo" to="home">Feliciano  </Link>
                 <button className="navbar-toggler d-lg-none bg-white" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 

               
                
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                       
                    <li className="nav-item">
                            <Link className="nav-link"  to ="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link"  to ="about">About</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link"  to ="menu">Menu</Link>
                        </li>
        
                        <li className="nav-item">
                            <Link className="nav-link" to ="stories">Stories</Link>
                        </li>
        
                        <li className="nav-item">
                            <Link className="nav-link"  to ="contact">Contact</Link>
                        </li>
        
                        <li className="nav-item ">
                            <Link className="nav-link  book border-none "  to ="booktable">Book a table</Link>
                        </li>
                    </ul>
                   
                 </div>
            </div>
        
          </nav>

</div>
</div>
    );
}
