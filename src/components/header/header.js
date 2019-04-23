import React, { Component } from 'react';
import logo_image from '../../img/logo.png';
import '../../css/style.css';

class Header extends Component {
  render() {
    return (
      <div className="Header" id="Header">
        <div className="container-fluid">
           <nav className = "nav d-flex">
             <img src={logo_image} className="mr-auto p2 logo_header" alt="logo" />
              <div className="dropdown p2 dropdown_header mt-2">
                 <button className="session_options_button header_dropdown" id="session_options" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  { this.props.name} <i className="fas fa-angle-down"></i>
                 </button>
                 <div className="dropdown-menu" aria-labelledby="session_options">
                   <a href="#Header">Cerrar sesión</a>
                 </div>
              </div>
           </nav>
          </div>
      </div>
    );
  }
}

export default Header;
