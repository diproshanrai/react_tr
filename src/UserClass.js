import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, address } = this.props;
    return (
      <div>
        <h1>Name : {name}</h1>
        <h2>Address : {address}</h2>{" "}
      </div>
    );
  }
}

export default UserClass;
