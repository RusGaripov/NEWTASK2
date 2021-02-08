import React, { Component } from 'react'
import {connect} from "react-redux"
import  {fetchPhotos} from "../../store/actions/photosActions"
import  {fetchAlbums} from "../../store/actions/albumsActions"
import  Photo from  "../Photo/Photo"
import Spinner from "../Spinner/Spinner"

export class Photos extends Component {

componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchAlbums();
    this.props.fetchPhotos(id);
   
}


    render() {
        const {photos}= this.props
        if(!photos) {
            return <Spinner/>
        }
        return (
           
                <div>
               {photos.map(photo=> {
                   return <Photo key = {photo.id} title={photo.title} url={photo.url} photo={photo} />
               })}
               </div>             
        )
    }
}

const mapStateToProps= state => ({
    photos:state.photosReducer.photos,
    albums:state.photosReducer.albums,
})
export default connect(mapStateToProps, {fetchPhotos,fetchAlbums})(Photos)
