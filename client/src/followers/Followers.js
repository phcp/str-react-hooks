import React from 'react';
import { useFetch } from '../hooks/useFetch';
import styled from 'styled-components';



const IconFollow = styled.img`
border-radius: 5rem;
width: 3rem;
height: 3rem;
`;

const NameFollow = styled.span`
color: tomato;
margin-left: 10px;
`;

const ListFollowers = styled.li`    
&:first-of-type {
    //COMENTÁRIO background-color: red; 
    border-radius: 10px 10px 0px 0px;
}
&:last-of-type {
    //COMENTÁRIO background-color: blue;
    border-radius: 0px 0px 10px 10px;
}
position: relative;
display: block;
padding: 0.75rem 1.25rem;
background-color: #fff;
`;

const FollowersGroup = styled.ul`
display: flex;
flex-direction: column;
margin-top: 20px;
border-radius: 10px;
`;

const Followers = () => {
    const { data } = useFetch('users');

    return (
        <FollowersGroup>
            {data.map(user => (
                <ListFollowers class="list-group-item">
                    <IconFollow src={user.imageUrl} />
                    <NameFollow>{user.name}</NameFollow>
                </ListFollowers>
            ))}
        </FollowersGroup>
    );
}

export default Followers;
