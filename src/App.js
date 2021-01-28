// main app component
// import logo from './logo.svg';
import React, { Fragment, Component } from 'react';
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
  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
      </div>
    );
  }
  // ~start~condition
  // render() {
  //   const name = 'Intan';
  //   const loading = false;
  //   const showName = true;
  //   // if (loading) {
  //   //   return <h4>Loading...</h4>;
  //   // }
  //   return (
  //     <div className='App'>
  //       {loading ? (
  //         <h4>Loading...</h4>
  //       ) : (
  //         // if and else
  //         // <h1>Hello {showName ? name : null}</h1>
  //         // if only
  //         <h1>Hello {showName && name}</h1>
  //       )}
  //     </div>
  //   );
  // }
  // ~end~condition
  // ~start~calling variables
  // foo = () => 'Kirana';
  // render() {
  //   const name = 'Intan';
  //   const foo = () => 'Chrizsan';
  //   return (
  //     <div className='App'>
  //       <h1>Hello {this.foo()}</h1>
  //       <h1>Hello {foo()}</h1>
  //       <h1>Hello {name.toUpperCase()}</h1>
  //       <h1>Hello {name}</h1>
  //     </div>
  //   );
  // }
  // ~end~calling variables
  // ~start~without jsx
  // render() {
  //   // React.createElement to render out any element
  //   // React.createElement(what element we want to render, any attributes you want, what you want inside that element)
  //   return React.createElement(
  //     'div',
  //     { className: 'App' },
  //     React.createElement('h1', null, 'Hello Intan')
  //   );
  // }
  // ~end~without jsx
  // cant return directy from a class, so we need a method ( a function within a class)
  // method render, a lifecycle method which run at a certain point when the components loaded
  // render() {
  //   return (
  // jsx expressions must have one parent element ONLY ( all elements need to be inside div classNAme='App'), for several use React.Fragment, can also use empty bracket <></> but will cause issues
  // html class, jsx className
  // <div className='App'>
  // <>
  //   <Fragment>
  //     <h1>Hello Intan</h1>
  // {/* html for, jsx htmlFor */}
  //     <label htmlFor='name'>Name</label>
  //   </Fragment>
  // </>
  // </div>
  //   );
  // }
}

export default App;
