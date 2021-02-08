import React, { Component } from 'react'
import  {Link}  from "react-router-dom"

export class Album extends Component {
    render() {
        const {album}=this.props
        return (
            <div style={{ marginBottom:"20px"}}>
                 <div className="card">
                    <div className="card-body">
                        <p>{album.title}</p>             
                    </div>
                </div>
                <Link to={`/albums/${album.id}`} style={{ width: "200px", minHeight: "20px",marginTop:"20px"}} className="btn btn-primary">Открыть альбом</Link>
            </div>
        )
    } 
}

export default Album
