import React from 'react';
import styled from 'styled-components';

const CardImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
`;

const Image = styled.img`
width: 100%;
transition: transform .2s;

&:hover {
    transform: scale(1.2);
}
`;

const Subtitle = styled.span`
color: palevioletred;
font-weight: bold;
`;


const Post = ({ description, imageUrl }) => {
    return (
        <CardImage>
            <Image src={imageUrl} />
            <Subtitle>
                {description}
            </Subtitle>
        </CardImage>
    );
};

export default Post;