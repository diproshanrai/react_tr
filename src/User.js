const User = (props)=>{

const {name,address} = props;

    return (
        <div>
            <h1> Name: {name}</h1>
            <h2> Address: {address}</h2>
        </div>
    )
}

export default User;