import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchUsers} from "../../store/actions/usersActions"
import Spinner from "../Spinner/Spinner"
import  User from  "../User/User"

export class Users extends Component {
    constructor(props) {
        super(props);
       
      }
      
   componentDidMount() {
   
   this.props.fetchUsers();

   }


    render() {  
        const {users} = this.props;
       
        if(!users){
            return <Spinner/>;
        }

        return (
        <div>
            <div>
               {users.map(user=> {
                   return <User key = {user.id} user={user}/>
               })}
            </div>           
        </div>
        )
    }
}

const mapStateToProps = state => ({
    users:state.usersReducer.users
})

export default connect(mapStateToProps, {fetchUsers})(Users)
