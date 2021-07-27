import axios from 'axios';
import React ,{useContext, useEffect ,useState} from 'react'
import { useLocation,Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import SideBar from '../../sideBar/SideBar';

import './SinglePost.css'
const SinglePost = () => {
    const location =useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] =  useState({});
    const PF ="http://localhost:5000/images/";
    const {user } = useContext(Context);
    const [title,setTitle] =useState("");
    const [desc,setDesc] =useState("");
    const [updateMode,setUpdateMode] =useState(false);


    useEffect(() => {
        const getPost = async ()=>{            
            const res = await axios.get("/post/" + path );
            setPost(res.data)
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
       
    }, [path])
    const handleDelete = async ()=>{

        try{
            await axios.delete("/post/" + path,{data:{username:user.username}})
            window.location.replace("/")
        } catch(err){

        }

        }
        const handleUpdate =async ()=>{
            try{
                await axios.put("/post/" + path,{username:user.username,title,desc})
                // window.location.replace("/")

                setUpdateMode(false);

            }catch(err){

            }
        }
        

    return (
       <div className="p">
        <div className="singlePost">
            <div className="singlePostWrap">
                { post.photo && 
                     <img className="singlePostImg" src ={PF + post.photo} alt =""/>
                }{
                    updateMode ? <input type ="text"  className="singlePostTitleInput" value={title}  onChange={(e)=>setTitle(e.target.value)} />:(

                    
                
               

                <h1 className="singlePostTitle">{title}
                {
                    post.username === user?.username && 
                    <div className="singleEdit">
                   <i class="icon far fa-edit" onClick ={()=>setUpdateMode(true)}></i>
                   <i class=" icon fas fa-trash"  onClick ={handleDelete}></i>
                </div>
                }
                
                </h1>

                )}
                <div className="singlePostInfo">
                    <div className="author">Author :  
                    <Link to ={`/?user=${post.username}`} style={{ textDecoration: 'none' }}>

                    <b>{post.username}</b>
                    </Link>
                    </div>
                    <div className="date">Date : <b>{new Date(post.createdAt).toDateString()}</b></div>
                </div>
                {
                    updateMode ? (<textarea  className="singlePostDescInput" autoFocus="true" value={desc} onChange={(e)=>setDesc(e.target.value)}    /> ):(
                        <p className="singlePostDesc">
                        {desc}
                        </p>
     

                    )
                }       
                {
                    updateMode && (


                        <button className="singlePostButton" onClick={handleUpdate} >Update</button>

                    )    
                }        
               
              </div>       

           
        </div>
          <SideBar/>
        </div>
    )
}

export default SinglePost
