import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h2>Users: {users ? users.length : 0}</h2>
        </div>
    )
}