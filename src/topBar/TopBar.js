import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
import './TopBar.css';
import { Context } from '../context/Context';
const TopBar = () => {
    const {user,dispatch} = useContext(Context)
      const PF = "http://localhost:5000/images/"

    const handleLogout =() =>{
        dispatch({type:"LOGOUT"});
    };


    return (
        <div className ="top">
             <div className ="topLeft">
               <FacebookIcon  className ="topIcon"/>  
               <TwitterIcon  className ="topIcon"/>
               <PinterestIcon  className ="topIcon"/>
               <InstagramIcon  className ="topIcon"/>
                 
              </div>
             <div className ="topHome">
             <ul className="topList">
                  <li className="lopListItem">
                      <Link to="/"   className="link">HOME</Link>
                  </li>
                 <li className="lopListItem"> <Link to="/about"   className="link">ABOUT</Link></li>
                 <li className="lopListItem"> <Link to="/contact"   className="link">CONTACT</Link></li>
                 <li className="lopListItem"> <Link to="/write"   className="link">WRITE</Link></li>
                 <li className="lopListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                 
             </ul>              
             </div>

             <div className ="topRight">
                 {  
                     user ? (
                        <>
                        <Link to ="/Setting">
                        <img className ="topImg" src={ PF + user.profilePic} alt ="profilepic"/>
                        </Link>                        
                        <SearchIcon className ="topSearch"/>
                        </>
                        
                     ) : ( 
                         
                         <ul className="topList">
                         <li className ="topListItem">
                         <Link className="link" to="/login">LOGIN</Link>
                         </li>
                         <li className ="topListItem">
                         <Link className="link" to="/register">REGISTER</Link>
                         </li>                       
                        
                         </ul>
                        
                         
                         )
                     }                
                 
              
             </div>

            </div>
     
    )
}

export default TopBar
