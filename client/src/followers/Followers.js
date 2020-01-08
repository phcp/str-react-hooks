import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Followers = () => {
    const users = useFetch('users');

    return (
        <ul class="list-group">
            {users.map(user => (
                <li class="list-group-item">
                    <img style={{width: "5rem"}} className="float-left" src={user.imageUrl}></img>
                    <span>{user.name}</span>
                </li>
            ))}
        </ul>
    );
}

export default Followers;
