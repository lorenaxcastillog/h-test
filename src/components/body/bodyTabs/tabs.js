import React, { Component } from 'react';
import AccountContent from './accountContent/accountContent';
import ItemContent from './itemContent/itemContent';

class Tabs extends Component {
  render() {
    return (
      <div className = "container">
        <ul className="nav nav-tabs Tabs-nav-tabs" role="tablist">
          <li className="nav-item active_tab">
            <a className="nav-link active" id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="true">
              Cuenta
            </a>
          </li>
          <li className="nav-item active_tab">
            <a className="nav-link" id="item-tab" data-toggle="tab" href="#item" role="tab" aria-controls="item" aria-selected="false">
              Item
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
            <AccountContent user = { this.props.user } />
          </div>
          <div className="tab-pane fade" id="item" role="tabpanel" aria-labelledby="item-tab">
            <ItemContent />
          </div>
        </div>
      </div>
    );
  }
}


export default Tabs;
