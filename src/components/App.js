import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Posts from "./Posts/Posts"
import Users from "./Users/Users"
import NotFound from "./NotFound/NotFound"
import Navbar from "./Navbar/Navbar"
import AddPost from "./AddPost/AddPost"
import Albums from "./Albums/Albums"
import Photos from "./Photos/Photos"


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/" component={Posts}/>
            <Route exact path="/add" component={AddPost}/>
            <Route exact path="/albums" component={Albums}/>
            <Route exact path="/albums/:id" component={Photos}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
