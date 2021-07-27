import { Card } from '@material-ui/core'
import {Link} from 'react-router-dom';
import React,{useRef,useContext} from 'react'
import './Login.css'
import { Context } from '../../context/Context';
import axios from 'axios';


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data });
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    }

    return (
         <div className="login">
             <Card className="loginCard">
                 <form className="loginForm" onSubmit ={handleSubmit}>
                     <span className="loginTitle">Login</span>
                     <label >Username </label>
                     <input type="text" className="loginInput" placeholder="Enter your username.." autoFocus="true" ref ={userRef} />
                     <label >Password </label>
                     <input type="password" className="loginInput" placeholder="Enter ur password.." ref={passwordRef}/>
                     <button className="loginButton" type ="submit" disabled={isFetching}>
                         Login
                     </button>
                 </form>
                                
                 
                 
            </Card>
            <button className="loginReg">
                <Link to ="/register" className ="link">
                Register
                </Link>
                </button>
         </div>
        
    )
}

export default Login
