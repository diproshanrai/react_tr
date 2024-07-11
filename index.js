import React from "react";
import ReactDOM from "react-dom/client";

// let parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am Good"),
//     React.createElement("h1", {}, "I am bad"),
//   ]),
//   React.createElement(
//     "div",
//     { id: "parent2" },
//     React.createElement(
//       "div",
//       { id: "child2" },
//       React.createElement("h1", {}, "Ia m part2")
//     )
//   ),
// ]);

const jsxParent = <h1 className="Parent"> Hello there</h1>;

const Heading = () => (
  <div id="head">
    <h1> Namaste Dir ji how do you do</h1>
  </div>
);

const Heading2 = () => (

  <div id="head">
    <h1> Namaste ani i am do u do</h1>
  </div>
);

const App = () => {
  
  return (
    <div>
      <p>Welcome to the app!</p>
      {jsxParent}
      
      <Heading />
      <Heading2 />
    </div>
  );
};

let display = ReactDOM.createRoot(document.getElementById("root"));


display.render(<App />);


// const head = React.createElement("h1", {}, "hey I am React");

// const put = ReactDOM.createRoot(document.getElementById("root"));

// put.render(head);
