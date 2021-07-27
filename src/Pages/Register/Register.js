import { Card } from '@material-ui/core'
import axios from 'axios';
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Register.css'


const Register= () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            
        const res = await axios.post("/auth/register",{
            username,
            email,
            password,
        });

        res.data && window.location.replace("/login")
    }catch(err){
        setError(true);
    }
        
    };

    return (
         <div className="register">
             <Card className="registerCard">
                 <form className="registerForm" onSubmit={handleSubmit}>
                     <span className="registerTitle">Register</span>
                     <label >User Name</label>
                     <input type="text" className="registerInput" placeholder="Enter your name.." autoFocus="true" 
                     onChange ={e=>setUsername(e.target.value)}
                     
                     />
                    
                     <label >Email </label>
                     <input type="text" className="registerInput" placeholder="Enter your email.." autoFocus="true" 
                      onChange ={e=>setEmail(e.target.value)}
                     />
                     <label >Password </label>
                     <input type="password" className="registerInput" placeholder="Enter ur password.." 
                     
                     onChange ={e=>setPassword(e.target.value)}
                     />
                     <button className="registerButton" type="submit">
                         Register
                     </button>
                     {error && <span style = {{color:"red"}}>Something went Wrong!</span>}
                 </form>
                                
                 
                
            </Card>
            <button className="Reglogin">
            <Link to ="/login" className ="link">
                Login
                </Link>
            </button>
           
         </div>
        
    )
}

export default Register
