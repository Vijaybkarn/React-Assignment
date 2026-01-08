import React, {useState, useEffect} from "react";

const UserProfile: React.FC = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1").then((res)=>res.json()).then((data)=>setUser(data));
        console.log(data)
    }, [])

    return(
        <div>
            <h2> User Profile</h2>
            {user.map((user)=>(
                <p key={user.id}>{user.name}, {user.username}, {user.email}, {user.address}</p>
            ))}
        </div>
    )
}

export default UserProfile;