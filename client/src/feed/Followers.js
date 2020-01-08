import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';

const Followers = () => {
    const users = useFetch('users');

    return (
        <>
            {users.map((user, index) => (
                <Post
                    key={index}
                    description={user.name}
                    imageUrl={user.imageUrl}
                    borderRadius="50%"
                />
            ))}
        </>
    );
}

export default Followers;