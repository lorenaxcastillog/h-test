import React, { Component } from 'react';
import shieldImage from '../../../../img/shieldcheck.png';
import '../../../../css/style.css';

class Session extends Component {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this._renderSubComponent = this._renderSubComponent.bind(this);
      this.addNewEmail = this.addNewEmail.bind(this);
      this.deleteEmail = this.deleteEmail.bind(this);
      this.updateVerificationEmailValue = this.updateVerificationEmailValue.bind(this);
      this.updateMainEmail = this.updateMainEmail.bind(this);
      this.state = {
        render : '',
        verificationEmailValue : '',
        e_mails : props.e_mails,
        show_session_alert: false
      }
  }
  //show  hide verification input
  handleClick(componentName, e){
    if(componentName !== 'Cancel' && this.state.verificationEmailValue === '')
    {
      alert("Ingresa un e-mail")
      console.log("Ingreso e_mail vacío");
    }
    else {
      this.setState({render:componentName});
      this.setState({show_session_alert : false}); //hide alert
    }
  }
  _renderSubComponent(){
    switch(this.state.render){
        default : return <Null />
        case '': return <Null/>
        case 'SendVerification' :
            return <SendVerification handleClick={this.handleClick} addNewEmail = {this.addNewEmail} verificationEmailValue = {this.state.verificationEmailValue}/>
        case 'Cancel' : return <Null />
    }
  }
  //update email verification value
  updateVerificationEmailValue(evt){
        this.setState({
         verificationEmailValue: evt.target.value,
       });
  }
  // add new email
  addNewEmail(e_mail, password){
    if(e_mail === '')
    {
      alert("Ingresa un e-mail");
      console.log("Ingreso e_mail vacío");
    }
    else {
      if(password === this.props.password){
        let new_e_mail = {
          "e_mail" : e_mail,
          "main": false,
          "verified": false
        }
        this.setState({e_mails:[...this.state.e_mails,new_e_mail]});
        this.setState({show_session_alert : true});
        this.setState({render : 'Cancel'});
        console.log("contraseña válida");
      }
      else {
            alert("Contraseña incorrecta");
            console.log("Ingreso contraseña incorrecta", password);
      }
    }
  }
  // delete e_mail
  deleteEmail(delete_index){
    this.setState({
      e_mails:[...this.state.e_mails.filter( (item, index) => index !== delete_index )]
    })
    this.setState({show_session_alert : true});
    console.log("e_mail eliminado");
  }
  //update main email
  updateMainEmail(update_index){
    let temp = this.state.e_mails.map((value, i) => {
      if (value.main === true)
      {
        value.main = false;
      }
      return value;
    })
    temp[update_index].main = true;
    this.setState({ e_mails : temp })
    this.setState({show_session_alert : true});
    console.log("actualizó e_mail principal");
  }
  render() {
    // get emails from user
    let list_e_mails = this.state.e_mails.map((value, i) => {
         return(
          <div className = "list_e_mails" key={i}>
            <div className="row">
                <p className="col text-left font-weight-bold" >{ value.e_mail }</p>
                { value.main === true
                  ?   <div className = "col text-right">
                        <p>correo principal</p>
                      </div>
                  :
                  value.verified === true
                  ?   <div className = "col text-right">
                        <a className="ml-2" href="#accordionSession" onClick={this.updateMainEmail.bind(this, i)}>Seleccionar como principal</a>
                        <a className="ml-2" href="#accordionSession" onClick={this.deleteEmail.bind(this, i)}>Eliminar</a>
                      </div>
                  :
                      <div className = "col text-right">
                        <a className="ml-2" href="#collapseSession" onClick={this.handleClick.bind(this, 'SendVerification')}>Reenviar verificación</a>
                        <a className="ml-2" href="#accordionSession" onClick={this.deleteEmail.bind(this, i)}>Eliminar</a>
                      </div>
                }
            </div>
          </div>
        )
      })
    return (
      <div className = "container">
        <div className="accordion" id="accordionSession">
            <div className="d-flex mb-3">
              <div className="mr-auto p-2">
                <h4>Inicio de sesión y seguridad</h4>
              </div>
              {/* collapse arrow*/}
              <div className="p-2 flex-shrink-1">
                  <i className="fas fa-angle-down toggle_arrow" data-toggle="collapse" data-target="#collapseSession" aria-expanded="true" aria-controls="collapseSession"></i>
              </div>
            </div>
            <div id="collapseSession" className="collapse show" aria-labelledby="headingSession" data-parent="#accordionSession">
              <div className="card-body">
              <p className="text-left subtitle_session"> Añade o elimina direcciones de correo electrónico de tu cuenta.</p>
                {/* show emails*/}
                  { list_e_mails }

                <p className="text-left"> Correo electrónico</p>
                <div className="row justify-content-start input_e_mail">
                    <input value={this.state.verificationEmailValue} type="email" className="col-sm form-control" placeholder="e-mail"
                      onChange={evt => this.updateVerificationEmailValue(evt)}/>
                    <button type="button" className="btn btn-primary ml-2" onClick={this.handleClick.bind(this, 'SendVerification')}>
                      Enviar verificación
                    </button>
                    <button type="button" className="btn btn-outline-secondary ml-2" onClick={this.handleClick.bind(this, 'Cancel')}>Cancelar</button>
                </div>
                {this._renderSubComponent()} {/*Show verification input */}

                {/* alert */}
                <ShowSessionAlert show={this.state.show_session_alert}/>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

//verification input
class SendVerification extends Component {
  constructor(props){
      super(props);
      this.state = {
        inputPasswordValue : ''
      }
  }
  //update input password value
  updatePasswordValue(evt){
        this.setState({
         inputPasswordValue: evt.target.value,
       });
  }
  render() {
    let email_to_be_verified = this.props.verificationEmailValue; //email from input
    return (
     <div className="SendVerification" id="SendVerification">
       <div className="row">
         <div className="col-3">
           <img src={shieldImage} alt="secureShield" className="shieldImage"/>
         </div>
         <div className="col-9">
           <h5>Verificación</h5>
           <p>Para tu seguridad, introduce tu contraseña para realizar este cambio.</p>
           <input value={this.state.inputPasswordValue} type="password" className="form-control" placeholder="Ingresa tu contraseña"
             onChange={evt => this.updatePasswordValue(evt)}/> {/* input password */}
           <button type="button" className="btn btn-primary" onClick={()=>this.props.addNewEmail(email_to_be_verified, this.state.inputPasswordValue)}>
             Listo
           </button>
           <button type="button" className="btn btn-outline-secondary ml-2" onClick={()=>this.props.handleClick()}>Cancelar</button> <br />
           <a href="#SendVerification"> Olvidaste tu contraseña</a>
         </div>
       </div>
     </div>
  );
}
}
class Null extends Component {
  render() {
    return <div></div>
  }
}
function ShowSessionAlert(props) {
  const show = props.show;
  if (show === true) {
    return <SessionAlert />;
  }
  return <div></div>;
}
class SessionAlert extends Component {
  render(){
    return(
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Cambios guardados</strong>
      </div>
    )
  }
}
export default Session;
