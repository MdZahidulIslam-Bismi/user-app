import React, { useEffect, useState } from 'react'

function UserList({userList}) {
    const [users, setUsers] = useState([]);

    const getUsersArray = () => {
        try {
            const usersArray = JSON.parse(window.localStorage.getItem('users'));
            if (usersArray && Array.isArray(usersArray)) {
                setUsers(usersArray)
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUsersArray();
    }, [userList]);

    return (
        <div>
            <h1>Users list</h1>
            <button onClick={() => getUsersArray()}>Update Data</button>
            <table id="example" class="table table-striped table-bordered" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>City Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.length
                ? users.map((user, index) => (
                    <div key={index}>   
                                           
            <tr class="table row-striped row-bordered">
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.gender.value}</td>
                <td> {user.date}</td>
                <td>{user.cityName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
            </tr>
            </div>
                ))
                : <p>User list is empty. Create new user and click refresh to view all users list</p>
            }
            </tbody>
    </table>

        </div>
    )
}

export default UserList