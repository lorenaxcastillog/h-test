import React, { Component } from 'react';

class CellphoneNumber extends Component {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this._renderSubComponent = this._renderSubComponent.bind(this);
      this.verifyCode = this.verifyCode.bind(this);
      this.updateVerificationCellphoneValue = this.updateVerificationCellphoneValue.bind(this);
      this.updateMainCellphone = this.updateMainCellphone.bind(this);
      this.updateCountry = this.updateCountry.bind(this);
      this.deleteCellphone = this.deleteCellphone.bind(this);
      this.state = {
        render:'',
        verificationCellphoneValue:'',
        verification_code: '1234',
        cellphones : props.cellphones,
        selectedCountry: 'PE +51',
        show_cellphone_alert: false
      }
  }
  //show  hide verification input
  handleClick(componentName, e){
    if(componentName !== 'Cancel' && this.state.verificationCellphoneValue === '')
    {
      alert("Ingresa tu número de celular")
      console.log("número de celular vacío");
    }
    else {
      this.setState({render:componentName});
      this.setState({show_cellphone_alert : false}); //hide alert
      console.log("número de celular válido");
    }
  }
  _renderSubComponent(){
    switch(this.state.render){
        default : return <Null />
        case '': return <Null/>
        case 'SendVerification' : return <SendVerification  handleClick={this.handleClick} verification_cellphone = {this.state.verificationCellphoneValue} verifyCode = {this.verifyCode}/>
        case 'Cancel' : return <Null />
    }
  }
  //update cellphone verification value
  updateVerificationCellphoneValue(evt){
        this.setState({
         verificationCellphoneValue: evt.target.value,
       });
       console.log("actualizó número de celular");
  }
  //update selected country
  updateCountry(evt){
    this.setState({selectedCountry:evt.target.value});
    console.log("cambió país seleccionado");
  }
  //verify verification code
  verifyCode(code){
    if(code === this.state.verification_code){
      let new_cellphone = {
        "country" : this.state.selectedCountry,
        "number" : this.state.verificationCellphoneValue,
        "main" : false,
        "verified" : false
      }
      this.setState({cellphones:[...this.state.cellphones, new_cellphone]});
      this.setState({show_cellphone_alert : true});
      console.log("código válido");
      console.log("número agregado");
    }
    else {
          alert("Código incorrecto");
          console.log("código incorrecto");
    }
  }
  // delete cellphone
  deleteCellphone(delete_index){
    this.setState({
      cellphones:[...this.state.cellphones.filter( (item, index) => index !== delete_index )]
    })
    this.setState({show_cellphone_alert : true});
    console.log("número de celular eliminado");
  }
  //update main cellphone
  updateMainCellphone(update_index){
    let temp = this.state.cellphones.map( (value, i) => {
      if(value.main === true)
      {
        value.main = false;
      }
      return value;
    });
    temp[update_index].main = true;
    this.setState({ cellphones : temp })
    this.setState({show_cellphone_alert : true});
  }
  render() {
    let list_cellphones = this.state.cellphones.map((value, i) => {
         return(
          <div className = "list_cellphones" key={i}>
            <div className="row">
                <p className="col text-left" > {value.country}  { value.number }</p>
                { value.main === true
                  ?   <div className = "col text-right">
                        <p>Número principal</p>
                      </div>
                  :
                  value.verified === true
                  ?   <div className = "col text-right">
                        <a className="ml-2" href="#accordionCellphone" onClick={this.updateMainCellphone.bind(this, i)}>Seleccionar como principal</a>
                        <a className="ml-2" href="#accordionCellphone" onClick={this.deleteCellphone.bind(this, i)}>Eliminar</a>
                      </div>
                  :
                      <div className = "col text-right">
                        <a className="ml-2" href="#accordionCellphone" onClick={this.updateMainCellphone.bind(this, i)}>Seleccionar como principal</a>
                        <a className="ml-2" href="#accordionCellphone" onClick={this.deleteCellphone.bind(this, i)}>Eliminar</a>
                      </div>
                }
            </div>
          </div>
        )
      })
    return (
      <div className = "container">
        <div className="accordion" id="accordionCellphone">
            <div className="d-flex mb-3">
              <div className="mr-auto p-2">
                <h4>Números de celular</h4>
              </div>
              {/* collapse arrow*/}
              <div className="p-2 flex-shrink-1">
                  <i className="fas fa-angle-down toggle_arrow" data-toggle="collapse" data-target="#collapseCellphone" aria-expanded="true" aria-controls="collapseCellphone"></i>
              </div>
            </div>
            <div id="collapseCellphone" className="collapse show" aria-labelledby="headingCellphone" data-parent="#accordionCellphone">
              <div className="card-body">
                <p className="text-left subtitle_cellphone">Añade un número de celular para hacer más segura tu cuenta.</p>
                {list_cellphones}
                <div className = "row">
                  <select className="custom-select" defaultValue="PE +51" onChange={evt=>this.updateCountry(evt)}>
                    <option value="PE +51">Perú</option>
                    <option value="AR +54">Argentina</option>
                    <option value="CO +57">Colombia</option>
                  </select>

                    <div className = "col">
                      <input onChange={evt => this.updateVerificationCellphoneValue(evt)} type="number" className="form-control" />
                    </div>
                  <div className = "col">
                    <div className = "row">
                      <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick.bind(this, 'SendVerification')}>
                        Enviar verificación
                      </button>
                      <button type="button" className="btn btn-outline-secondary ml-2"  onClick={this.handleClick.bind(this, 'Cancel')}>
                        Cancelar
                      </button>
                    </div>
                  </div>
                  {this._renderSubComponent()} {/*Show verification input */}
                </div>
                <br />
                Enviaremos un código a este número; lo necesitarás en el último paso.
                {/* alert */}
                <ShowCellphoneAlert show={this.state.show_cellphone_alert}/>
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
        inputVerificationCodeValue : ''
      }
  }
  //update input verification code value
  updateVerificationCodeValue(evt){
        this.setState({
         inputVerificationCodeValue: evt.target.value,
       });
  }
  render() {
   return (
     <div className="SendVerification">
       <div className="card-body">
           <p className="mt-2 ml-5">Tu número de teléfono nos ayuda a mantener la seguridad de tu cuenta. <br />
           Introduce el código de verificación que acabamos de enviar al número {this.props.verification_cellphone}</p>
       </div>
       <div className="row justify-content-center ml-2">
       <div className="col">
           <input value={this.state.inputVerificationCodeValue} type="text" className="form-control ml-5"
             onChange={evt => this.updateVerificationCodeValue(evt)}/> {/* input verification code */}
        </div>
        <div className="col">
           <button type="button" className="btn btn-primary" onClick={()=>this.props.verifyCode(this.state.inputVerificationCodeValue)}>
             Validar
           </button>
           <button type="button" className="btn btn-outline-secondary ml-2" onClick={()=>this.props.handleClick()}>Cancelar</button> <br />
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

function ShowCellphoneAlert(props) {
  const show = props.show;
  if (show === true) {
    return <CellphoneAlert />;
  }
  return <div></div>;
}
class CellphoneAlert extends Component {
  render(){
    return(
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Cambios guardados</strong>
      </div>
    )
  }
}
export default CellphoneNumber;
