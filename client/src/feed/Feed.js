import React from 'react';
import Post from './Post';
import { useFetch } from '../hooks/useFetch';

const Feed = () => {
    const { data } = useFetch('users/1/posts');

    this.state = {
        posts: []
    };
}

componentDidMount() {
    fetch('http://58faa7da.ngrok.io/users/1/posts')
        .then(posts => posts.json())
        .then(posts => {
            this.setState({ posts })
        })
}

render() {
    const { posts } = this.state;
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
}

export default Feed;