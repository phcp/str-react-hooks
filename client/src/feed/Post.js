import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 100%;
border-radius: ${props => props.borderRadius};

transition: transform .2s;
&:hover {
    transform: scale(1.2);
}
`;

const Post = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <Image src={props.imageUrl} borderRadius={props.borderRadius} />
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
};

export default Post;