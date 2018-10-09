import React, { Component } from 'react';
import './App.css'
import  GenerateQuote  from  './Components/GenerateQuote';
import  DisplayQuote  from  './Components/DisplayQuote';
import Axios from 'axios'

 
const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
class App extends Component {
  
  state = {
    quote:[]
  };

  getCitation() {
    // Récupération de l'employé via fetch
    Axios(url).then(res => this.setState( this.setState({quote:res.data[0]})))
}

componentDidMount(){
  this.getCitation();
}
  render() {
    return (
      <div className="App">
        <GenerateQuote selectQuote ={() => this.getCitation()}  />
        <DisplayQuote  quote={this.state.quote}  />
      </div>
    );
  }
}

export default App;
