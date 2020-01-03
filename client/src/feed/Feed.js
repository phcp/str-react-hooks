import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';

const Feed = () => {
    const { data } = useFetch('users/1/posts');

    return (
        data.map((post, index) => (
            <Post
                key={index}
                description={post.description}
                imageUrl={post.imageUrl}
            />
        ))
    );
}

export default Feed;