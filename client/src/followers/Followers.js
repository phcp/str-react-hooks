import React from 'react';

export default class Followers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('http://7380c9a6.ngrok.io/users')
            .then(users => users.json())
            .then(users => {
                this.setState({users})
            })
    }
    
    render() {
        const { users } = this.state;
        return (
            <ul class="list-group">
                {users.map(user => (
                    <li class="list-group-item">
                        <img style={{width: "5rem"}} className="float-left" src={user.imageUrl}></img>
                        <span>{user.name}</span>
                    </li>
                ))}
            </ul>
        )
    }
}