import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';
import styled from 'styled-components';

const GroupFollow = styled.div`
display: flex;
flex-direction: column;
`;

const Followers = () => {
    const users = useFetch('users');

    return (
        <GroupFollow>
            {users.map((user, index) => (
                <Post
                    key={index}
                    description={user.name}
                    imageUrl={user.imageUrl}
                    borderRadius="50%"
                />
            ))}
        </GroupFollow>
    );
}

export default Followers;