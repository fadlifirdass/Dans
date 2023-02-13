import React, { Component } from 'react';  
  
class Construct extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'Sertifikat A'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    alert(this.props);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>Sertifikat yg dimiliki</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default Construct; 