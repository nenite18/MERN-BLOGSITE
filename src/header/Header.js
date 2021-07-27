import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="headerTitle">
               <span className="headerTitleSm">React & Node</span>
               <span className="headerTitleLg">Blog</span>
           </div>
           <img  className ="headerImg" src="https://images.unsplash.com/photo-1586244346603-b97b4fdb87e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>

           
        </div>
    )
}

export default Header
