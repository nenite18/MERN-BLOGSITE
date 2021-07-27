import React from 'react'
import SideBar from '../../sideBar/SideBar'
import SinglePost from '../SinglePost/SinglePost'
import './Single.css'


const Single = () => {
    return (
        <div className="single">
            <SinglePost/>

            <SideBar/>
            
        </div>
    )
}

export default Single
