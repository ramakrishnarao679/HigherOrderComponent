import React from 'react';
import HigherOrderComponents from '../HigherOrderComponent';

const Users = ({data})=>{
    return (
        <div>
            <h2>Data from the Users</h2>
            {data.slice(0,10).map((user)=>{
                return <p>{user.name}</p>
            })}
        </div>
    )
}
const UsersComp = HigherOrderComponents('Users', Users, 'users')
export default UsersComp;