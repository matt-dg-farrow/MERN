import React from 'react';
import UserDetail from './UserDetail';



function User() {
    let myUserData = {
        'name': 'Matthew Farrow',
        'dob': '29/11/1996',
        'city': 'Salford'
    };

    return (
        <div>
            <h1>User Page</h1>
            <UserDetail userData={myUserData}/>
        </div>
    );
}

export default User;