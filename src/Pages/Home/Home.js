import React, { useState, useEffect } from 'react';
import axios from "axios";
import './home.css';
import Header from '../../header/Header';
import Posts from '../../Posts/Posts';
import SideBar from '../../sideBar/SideBar';
import Footer from '../../Footer/Footer';
import { useLocation } from 'react-router-dom';


const Home = () => {
     
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    
    
    useEffect(() => {

        const fetchPosts = async ()=> {
            const res = await axios.get("/post" + search);
            setPosts(res.data);
            
        }    
         
        fetchPosts();   

    }, [search]);
    

    return (

        <>
         <Header/>
        <div className ="home">
            <Posts posts ={posts}/>
            <SideBar/>           
           
        </div>
        <Footer/>
        </>
    )
}

export default Home
