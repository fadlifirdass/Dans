import React from 'react'
import Construct from './Construct';
import "../style/WillUnMount.css"
import { Link } from 'react-router-dom';
import Example from './DidMount';
import UseEffect from './UseEffect';
import pic from "../img/pp.webp"







class ComponentOne extends React.Component {

 
  // Defining the componentWillUnmount method
  componentWillUnmount() {
    alert('Komponen ini akan di UnMounted');
  }

 
  render() {
    return (
         <div>
      <h1>Tiket</h1>
      </div>)
  }
}





class WillUnM extends React.Component {
  state = { display: true };
  delete = () => {
    this.setState({ display: false });
  };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
    <div class="sidenav">
      <img className='pic1' src={pic} alt="" />
      <p className='fullname'>FadliFirdaus</p>
      <Link to="/home/:userId"><a href="#">Home</a></Link>
      <a href="#">Sertifikat</a>
      <a href="#"><Link to='/list'>Dosen</Link></a>
    </div>    
      <div class="main">
        {comp}
        <button onClick={this.delete}>
          Gunakan Tiket
        </button>
        <Construct/>
        <br />
        <br />
        <hr />
        <div className='daftarsertifikat'>
        </div>
        <UseEffect/>
        <Example/>
      </div>
      </div>
      
      
    );
  }
}
 
export default WillUnM;

 






