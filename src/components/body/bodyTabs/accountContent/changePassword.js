import React, { Component } from 'react';

class ChangePassword extends Component {
  constructor(props){
      super(props);
        this.verifyPasswords = this.verifyPasswords.bind(this);
        this.handleInputPasswords = this.handleInputPasswords.bind(this);
        this.state = {
          password : props.password,
          inputPasswordValue : '',
          newPasswordValue : '',
          rep_newPasswordValue : '',
          show_password_alert: false
        }
  }
  handleInputPasswords(e)
  {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    })
  }
  verifyPasswords()
  {
    if(this.state.newPasswordValue !== '' && this.state.rep_newPasswordValue !== '' && this.state.inputPasswordValue !== '')
    {
      if(this.state.newPasswordValue === this.state.rep_newPasswordValue)
      {
        if(this.state.password === this.state.inputPasswordValue)
        {
          this.setState({
           password : this.state.newPasswordValue
         });
         alert("Contraseña actualizada");
         this.setState({show_password_alert : true}); //hide alert
         console.log("actualizó contraseña");
        }
        else {
          alert("Contraseña actual incorrecta");
          console.log("contraseña actual incorrecta");
        }
      }
      else {
        alert("La contraseña nueva no coincide");
        console.log("contraseña nueva no coincide");
      }
    }
    else {
      alert("Llena todos los campos")
      console.log("campos vacíos al guardar contraseña");
    }
  }
  render() {
    return (
      <div className = "container">
        <div className="accordion" id="accordionExample">
            <div className="d-flex mb-3">
              <div className="mr-auto p-2">
                <h4>Cambiar contraseña</h4>
              </div>
              <div className="p-2 flex-shrink-1">
                  <i className="fas fa-angle-down toggle_arrow collapse_arrow" data-toggle="collapse" data-target="#collapseChangePassword" aria-expanded="true" aria-controls="collapseOne"></i>
              </div>
            </div>
            <div id="collapseChangePassword" className="collapse show" aria-labelledby="headingChangePassword" data-parent="#accordionExample">
              <div className="card-body">
                  <p className="text-left subtitle_password">Crea una contraseña única para poder proteger tu cuenta.</p>
                <div className = "col-6 justify-content-start ml-5 text-left">

                      <p className="text-left">Contraseña actual.</p>
                      <input type="password" className="form-control" name="inputPasswordValue"
                         onChange={this.handleInputPasswords} />

                      <p className="text-left">Contraseña nueva.</p>
                      <input type="password" className="form-control" name="newPasswordValue"
                        onChange={this.handleInputPasswords} />

                      <p className="text-left">Vuelve a escribir tu contraseña nueva.</p>
                      <input type="password" className="form-control" name="rep_newPasswordValue"
                        onChange={this.handleInputPasswords} />
               </div>

                <div className="checkbox checkbox-primary ">
                    <input id="checkbox-1" type="checkbox" value=""/>
                    <label htmlFor="checkbox-1">
                      Solicita que todos los dispositivos inicien sesión con la contraseña nueva.
                    </label>
                </div>

               <div className="col-auto my-1">
                  <button type="submit" className="btn btn-primary" onClick={this.verifyPasswords.bind(this, 'Verify')}>Guardar</button>
               </div>

               {/* alert */}
               <ShowPasswordAlert show={this.state.show_password_alert}/>
             </div>
            </div>
        </div>
      </div>

    );
  }
}
//alert
function ShowPasswordAlert(props) {
  const show = props.show;
  if (show === true) {
    return <PasswordAlert />;
  }
  return <div></div>;
}
class PasswordAlert extends Component {
  render(){
    return(
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Cambios guardados</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
    )
  }
}


export default ChangePassword;
