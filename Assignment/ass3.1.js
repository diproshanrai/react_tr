import React from "react";
import ReactDOM from "react-dom/client";
import atom from "../image/atom.png";

const Header = () => {
  return (
    <div id="title">
      <img src={atom} alt="Atom" />
      <h2>Beact</h2>
    </div>
  );
};
const Search = () => {
  return(
  <div id="search">
    <input type="search" id="searchBar" />
    <button>Search</button>
  </div>);
};

const App = () => (
  <React.Fragment>
    <Header />
    <Search />
  </React.Fragment>
);

const display = ReactDOM.createRoot(document.getElementById("root"));

display.render(<App />);
