import React from 'react';
import Post from './Post'

export default class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://5dd6ba29.ngrok.io/posts')
            .then(posts => posts.json())
            .then(posts => {
                this.setState({posts})
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
