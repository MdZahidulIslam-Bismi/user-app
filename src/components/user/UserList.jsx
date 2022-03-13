import React, { useEffect, useState } from 'react'

function UserList() {
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
    }, [])
    return (
        <div>
            <h1>Users list</h1>
            <button onClick={() => getUsersArray()}>Refresh</button>
            {
                users.length
                ? users.map((user, index) => (
                    <div key={index}>
                         {/* <li>
                            {user.firstName} {user.lastName}
                        </li>
                        <li>
                            {user.gender}
                        </li> 
                        <li>
                            {user.date}
                        </li>
                        <li>
                            {user.cityName}
                        </li>
                        <li>
                            {user.phoneNumber}
                        </li>
                        <li>
                            {user.email}
                        </li> */}
                         
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
            <tr>
                <td>  {user.firstName} {user.lastName}</td>
                <td></td>
                <td>  {user.date}</td>
                <td>{user.cityName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
            </tr>
        </tbody>
        <tfoot>
           
        </tfoot>
    </table>
</div>
                ))
                : <p>User list is empty. Create new user and click refresh to view all users list</p>
            }
        </div>
    )
}

export default UserList