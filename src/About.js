import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent const")
    };

    componentDidMount(){
        console.log("parent comp")
    };

    render(){
        console.log("parent rend")
        return(
            <div>
                <UserClass />
                <User />
            </div>
        )
    };
};



// const About = ()=>{
//     return(
//         <div>
//             <h1>THis is About page</h1>
//             <h2>Wecome </h2>
//             <h3>Functional</h3>
//             <User name="Dip Rosahn" address="Dharan" />
//             <h3>class Based</h3>
//             <UserClass name="Dip Rosahn" address="Dharan" />
//         </div>
//     )
// }

export default About;