import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 

export class Photo extends Component {
 
    render() {
        const {photo}=this.props  
        return (

            <div >
               <div >
                    <p>{photo.title}</p>
                    <img className="img-thumbnail" src={photo.url}/>
                </div>
            </div>
        )
      
    } 
}

export default Photo
