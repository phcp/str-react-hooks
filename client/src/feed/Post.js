import React from 'react';

const Post = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.imageUrl} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
};

export default Post;