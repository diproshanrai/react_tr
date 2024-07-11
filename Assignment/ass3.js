import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React Element - 1
// const header = React.createElement("div", { id: "title" }, [
//   React.createElement("h1", {}, "I am Here"),
//   React.createElement("h2", {}, "I am tHere"),
// ]);

// const rend = ReactDOM.createRoot(document.getElementById("ass3"));

// rend.render(header);

//using JSX
const jsxHeader = (
  <div id="title">
    <h1>Who are you??</h1>
    <h2>I am you</h2>
    <h3>You am I</h3>
  </div>
);

// let rend = ReactDOM.createRoot(document.getElementById("ass3"));
// rend.render(jsxHeader);

// Using Functional Component
const Header = () => {
  return (
    <div id="title">
      <h1> this is where</h1>
      <h2>we are where</h2>
      <h3>we are pursuing</h3>
    </div>

    // or we can use this also when don't use curly we don't need to write return
    // (

    //     <div id= "title">
    //         <h1> this is where</h1>
    //         <h2>we are where</h2>
    //         <h3>we are pursuing</h3>
    //     </div>
    // )
  );
};

const rend = ReactDOM.createRoot(document.getElementById("ass3"));

// rend.render(<Header/>);

// Component Composition

const App = () => (
  <React.Fragment>
    {jsxHeader}
    {Header()}
     {/* as it is a JS also so we can also call it like in above format but standard on is this one => <Header />  */}
  </React.Fragment>
);

rend.render(<App />);
