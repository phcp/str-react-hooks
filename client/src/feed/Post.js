import React from 'react'

const Post = ({description, imageUrl}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top"/>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Post;