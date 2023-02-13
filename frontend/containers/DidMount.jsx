import React from 'react'
import "../style/didmount.css"

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `Di klik ${this.state.count} kali (DidMount/DidUpdate)`;
    }
    componentDidUpdate() {
      document.title = `Di klik ${this.state.count} kali (DidMount/DidUpdate)`;
    }
  
    render() {
      return (
        <div>
          <p> </p>
          <button className='didmount' onClick={() => this.setState({ count: this.state.count + 1 })}>
            Sertifikat B : {this.state.count} buah
          </button>
        </div>
      );
    }
  }


  export default Example;