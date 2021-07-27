import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './SideBar.css';
const SideBar = () => {
    const [cats,setCats]= useState([]);


    useEffect(() => {
       const getCats = async ()=>{
          const res = await axios.get("/categories")
          setCats(res.data);
      
        }
        getCats();
    }, [])

    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABout Me</span>
                <img  className ="sideBarImg" src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mine"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non expedita ut hic minima sed! Ipsam fugiat provident omnis culpa voluptatem velit, ad suscipit quae delectus quisquam in, unde voluptatum. Qui non sit corporis orporis reiciendis et deserunt culpa nam accusantium aliquam a. 
                </p>            
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    {cats.map((c) => (
                        <Link to ={`/?cat=${c.name}`}  className="link">
                        <li className="sideBarListItem">{c.name}</li>
                        </Link>
                    ))
                    }
                    
                   
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarsocial">
                <i className="sideBarIcon fab fa-facebook-square"></i>
                <i className="sideBarIcon fab fa-twitter-square"></i>
                <i className="sideBarIcon fab fa-instagram-square"></i>

                </div>
            </div>

        </div>
    )
}

export default SideBar
