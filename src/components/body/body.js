import React, { Component } from 'react';
import profile_image from '../../img/profile.png';
import shield_image from '../../img/shield.png';
import Tabs from './bodyTabs/tabs';
import '../../css/style.css';

class Body extends Component {
  render() {
    return (
      <div>
        <div className = "container card-body">
            <div className="Body">
              <Info user = { this.props.user } />
              <Tabs user = { this.props.user } />
            </div>
        {/*copyright */}
        <p className="card-text float-left">
          <small className="text-muted">
            Krowdy Corporation &copy; 2018
          </small>
        </p>
        </div>
      </div>
    );
  }
}

class Info extends Component {
  render() {
  //get main email
     let main_e_mail= this.props.user.e_mails.map((value, i) => {
       return(
        <div className = "main_e_mail" key={i}>
          { value.main === true
            ?   <p>{ value.e_mail }</p>
            :   <p></p>
          }
        </div>)})
    return (
      <div className = "container Info">
       <div className="row">
        <div className="col mt-2">
          <div className="row ml-5 mt-4">
            <img src={profile_image} className="profile_image" alt="logo"/>
            <div className="col text-left ml-3">
                <div className="row ml-1"><h5>{ this.props.user.name } </h5>
                 <i className="fas fa-pen ml-3 pen"></i>
                 </div>
                 { main_e_mail }
                 <small>Miembro desde {this.props.user.since} </small>
            </div>
          </div>
        </div>
        <div className="vertical_separator mt-2"></div>
        <div className="col mt-4">
          <div className="row">
            <div className="col text-left ml-4">
              <h4>Bienvenido</h4>
              <p className="welcome_text"> Desde aquí y con tu cuenta de krowdy podrás acceder rápidamente a tus herramientas y funciones para proteger tus datos y privacidad </p>
            </div>
            <div className="col">
              <img src={shield_image} className="" alt="logo" width="150"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Body;
