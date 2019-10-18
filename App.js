import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import background  from './background';                                   

export default class App extends React.Component {

  render(){
    const src = this.props.src;
  return (
    <div>
      <Navbar />
      <background className="background"/>
    </div>
  );

}

}

