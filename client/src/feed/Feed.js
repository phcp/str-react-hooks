import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';

const Feed = () => {
    const posts = useFetch('users/1/posts')

    return (
        posts.map((post, index) => (
            <Post
                key={index}
                description={post.description}
                imageUrl={post.imageUrl}
            />
        ))
    );
}

export default Feed;