import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchAlbums} from "../../store/actions/albumsActions"
import Spinner from "../Spinner/Spinner"
import  Album from  "../Album/Album"


export class Albums extends Component {
    constructor(props) {
        super(props);
       
      }
      
   componentDidMount() {
   this.props.fetchAlbums();
  
   }

  

    render() {  
        const {albums} = this.props;
        if(!albums){
            return <Spinner/>;
        }

        return (
            <div>
               
            <div>
               {albums.map(album=> {
                   return <Album key = {album.id} album={album}/>
               })}
            </div>           
        </div>
        )
    }
}

const mapStateToProps = state => ({
    albums:state.albumsReducer.albums,
})

export default connect(mapStateToProps, {fetchAlbums})(Albums)
