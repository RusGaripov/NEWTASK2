import React, { Component } from 'react'

export class User extends Component {
    render() {
        const {user}=this.props
        return (
                 <div className="card">
                    <div className="card-body">
                        <p>{user.name}</p>             
                    </div>
                </div>
        )
    } 
}

export default User
