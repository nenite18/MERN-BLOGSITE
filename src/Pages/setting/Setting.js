import React, { useContext,useState } from 'react'
import { Context } from '../../context/Context';
import SideBar from '../../sideBar/SideBar'
import axios from 'axios';
import './Setting.css';

export default function Setting() {
    const [username,setUsername] =  useState("");
    const [email,setEmail] =  useState("");
    const [password,setPassword] =  useState("");
    const [success, setSuccess] = useState(false)
    const [file,setFile] =  useState(null);
    const {user,dispatch}= useContext(Context); 
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser={
            userId: user._id,
            username,
            email,
            password,

         }
        if(file) {
            const data= new FormData();
            const filename = Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload",data);           
                
                }catch(err){}              
            
            };
            try{

             const res = await axios.put("/user/"+user._id,updatedUser);
             dispatch({type:"UPDATE_SUCCESS",payload:res.data})               
               setSuccess(true);            

             }catch(err){
                dispatch({type:"UPDATE_FAILURE"})

             }       
        

      };

//    console.log("/user/" + user._id)

    return (
        <div className="setting">
            <div className="settingWrap">
              <div className="settingTitle">
                  <span className="settingUpTitle">Update Account</span>
                  <span className="settingDelTitle">Delete Account</span>
              </div>
               <form className="settingForm" onSubmit = {handleSubmit} >
                   <label >Profile Picture</label>
                   <div className="settingPP">
                       <img src={file ? URL.createObjectURL(file) :PF + user.profilePic}  alt="" className="PP" />
                       <label htmlFor="fileInput">
                       <i className="settingPPIcon  far fa-user-circle"></i>
                       </label>
                       <input type="file" id="fileInput"  style={{display:"none"}} onChange ={ (e)=> setFile(e.target.files[0])}/>
                       
                    </div>   
                       <label> User Name </label>
              
                       <input type="text" placeholder={user.username}  onChange = {e=>setUsername(e.target.value)}/>
                       <label> Email </label>
                       <input type="email" placeholder={user.email}  onChange = {e=>setEmail(e.target.value)}/>
                       <label> Password </label>
                      
                       <input type="password" placeholder="Password" onChange = {e=>setPassword(e.target.value)} />
                       {success && <span className="update"> Profile has been updated...</span>}
                       <button className="settingSubmit"  type ="submit"> Update </button>
                      
                  
               </form>
            
            </div>
            <SideBar/>
        </div>
    )
}


