import React, { useState, useEffect } from 'react'

const DataList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(result => setUserList(result))
            .catch(err => console.log(err))
    }, console.log(userList), [])

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
            </tr>
            {
                userList && userList.length > 0 ?
                    userList.map(user =>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address?.street}</td>
                            <td>{user.address?.city}</td>


                        </tr>
                    ) : "Loading"
            }

        </table>
    )
}

export default DataList