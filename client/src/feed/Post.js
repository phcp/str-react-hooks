import React from 'react'

export default class Post extends React.Component {
    render() {
        return(
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.imageUrl} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        )
    }
}