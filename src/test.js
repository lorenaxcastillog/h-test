import React, { Component } from 'react';

class Test extends Component{
  getInitialState : function() {
      return { showMe : false };
   },
   onClick : function() {
      this.setState({ showMe : true} );
   },
   render : function() {
       if(this.state.showMe) {
           return (<div> one div </div>);
       } else {
           return (<a onClick={this.onClick}> press me </a>);
       }
   }
}


export default Test;




/*class Test extends Component {
  constructor(){
      super();
      this.state = {render:''}
  }
  handleClick(compName, e){
      console.log(compName);
      this.setState({render:compName});
  }
  _renderSubComp(){
      switch(this.state.render){
          case 'chockers': return <Chokers/>
          case 'bracelets' : return <Bracelets/>
          case 'rings': return <FRings/>
      }
  }
  render() {
       return (
           <div className="Test">
               <ul style={{display: 'inline'}}>
                   <li onClick={this.handleClick.bind(this, 'chockers')}>Chokers</li>
                   <li onClick={this.handleClick.bind(this, 'bracelets')}>Bracelets</li>
                   <li onClick={this.handleClick.bind(this, 'rings')}>Rings for Women</li>
               </ul>
               {this._renderSubComp()}
           </div>
       );
   }
}

class Chokers extends React.Component {
    render(){
        return <div>Inside Chockers</div>
    }
}
class FRings extends React.Component {
    render(){
        return <div>Inside FRings</div>
    }
}
class Bracelets extends React.Component {
    render(){
        return <div>Inside Bracelets</div>
    }
}

export default Test;
*/
