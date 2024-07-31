import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    console.log("child const2")
  }

  componentDidMount(){
    console.log("child comp2")
  }

  render() {
    const { name, address } = this.props;
    console.log("child render2")
    
    return (
      <div>

        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count : this.state.count +1
            }) 
        }}>Increment Here</button>
        <h1>Name : {name}</h1>
        <h2>Address : {address}</h2>{" "}
      </div>
    );
  }
}

export default User;
