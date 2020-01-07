import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';
import styled from 'styled-components';

const Timeline = styled.div`
display: flex;
flex-direction: column;
`;

const Feed = () => {
    const posts = useFetch('users/1/posts')

    return (
        <Timeline>
            {
                posts.map((post, index) => (
                    <Post
                        key={index}
                        description={post.description}
                        imageUrl={post.imageUrl}
                    />
                ))
            }
        </Timeline>
    );
}

export default Feed;