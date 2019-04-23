import React, { Component } from 'react';
import Session from './session';
import ChangePassword from './changePassword';
import CellphoneNumber from './cellphoneNumber';
import Connections from './connections';

class AccountContent extends Component {
  render() {
    return (
      <div className = "container AccountContent">
        <div className="row">
          <div className="col-3">
            <nav id="navbar-accountContent" className="navbar accountTabs text-left">
              <a className="nav-link" id="v-session-tab" href="#v-session">
                Inicio de sesión y seguridad
              </a>
              <a className="nav-link" id="v-cellphone-tab" href="#v-cellphone">
                Números de celular
              </a>
              <a className="nav-link" id="v-password-tab" href="#v-password">
                Cambiar contraseña
              </a>
              <a className="nav-link" id="v-connections-tab" href="#v-connections">
                Conexiones
              </a>
            </nav>
          </div>
          <div className="col-9">
            <div data-spy="scroll" data-target="#navbar-accountContent" data-offset="0">
              <section id="v-session">
                <Session e_mails = { this.props.user.e_mails } password = {this.props.user.password}/>
              </section>
              <hr />
              <section id="v-cellphone">
                <CellphoneNumber cellphones = { this.props.user.cellphones } />
              </section>
              <hr />
              <section id="v-password">
                <ChangePassword password = { this.props.user.password } />
              </section>
              <hr />
              <section id="v-connections">
                <Connections user = { this.props.user } />
              </section>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AccountContent;
