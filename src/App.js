// main app component
// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

// function based components
// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello Intan</h1>
//     </div>
//   );
// }

// class based components
// React.Component class which include lifecycle methods,etc
class App extends Component {
  // cant return directy from a class, so we need a method ( a function within a class)
  // method render, a lifecycle method which run at a certain point when the components loaded
  render() {
    return (
      <div className='App'>
        <h1>Hello Intan</h1>
      </div>
    );
  }
}

export default App;
