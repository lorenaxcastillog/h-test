import React, { Component } from 'react';
import '../../../../css/style.css'

class Connections extends Component {
  render() {
    let list_social_media= this.props.user.social_media.map((value, i) => {
      return(
        <div className="row" key={i}>
            <div className="col-1 social_media">
              <i className = { value.icon }></i>
            </div>
            <div className="col-5">
                  Estás conectado a {value.name}
                  <p>{ value.username}</p>
            </div>
            <div className="col-5">
              <a href="#collapseConnections" className="text-decoration-none ">Revocar acceso</a>
            </div>
        </div>
     )
    })
    return (
      <div className = "container">
        <div className="accordion" id="accordionExample">
            <div className="d-flex mb-3">
              <div className="mr-auto p-2">
                <h4>Conexiones</h4>
              </div>
              <div className="p-2 flex-shrink-1">
                  <i className="fas fa-angle-down toggle_arrow" data-toggle="collapse" data-target="#collapseConnections" aria-expanded="true" aria-controls="collapseOne"></i>
              </div>
            </div>
            <div id="collapseConnections" className="collapse show" aria-labelledby="headingConnections" data-parent="#accordionExample">
              <div className="card-body">
                  <p className="text-left subtitle_connections">Redes sociales conectadas a tu cuenta de Krowdy. </p>
                  {/* social media values */}
                  { list_social_media }
                  <hr />
                  <div className="row">
                    <div className="col-1 social_media">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="col-5">
                        Conectarse con Facebook
                    </div>
                    <div className="col-5">
                    <button type="button" className="btn btn-outline-secondary">
                      Conectarse con facebook
                    </button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Connections;
