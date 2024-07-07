let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Good"),
    React.createElement("h1", {}, "I am bad"),
  ]),
  React.createElement(
    "div",
    { id: "parent2" },
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", {}, "Ia m part2")
    )
  ),
]);

let display = ReactDOM.createRoot(document.getElementById("root"));

display.render(parent);

// const head = React.createElement("h1", {}, "hey I am React");

// const put = ReactDOM.createRoot(document.getElementById("root"));

// put.render(head);
