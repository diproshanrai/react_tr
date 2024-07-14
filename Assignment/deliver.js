import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
      ></img>
      <div id="navbar">
        <ul>
          <li>
            <h3>Home</h3>
          </li>
          <li>
            <h3>About Us</h3>
          </li>
          <li>
            <h3>Cart</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className=" res-card">
      <img
        className="food"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
      />
      <div className="details">
        <h3>Biryani</h3>
        <h3>Ahmed Biryani</h3>
        <h3>5.0 Stars</h3>
      </div>
    </div>
  );
};

const body = () => {
  return (
    <div className="body">
      <div id="search">
        <input type="search" />
      </div>
      <br />
      <div id="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      {body()}
    </div>
  );
};

const display = ReactDOM.createRoot(document.getElementById("ass3"));

display.render(<App />);
