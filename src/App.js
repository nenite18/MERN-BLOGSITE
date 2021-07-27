import React ,{useContext}from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';
import TopBar from './topBar/TopBar';
import Home from './Pages/Home/Home';
import Write from './Write/Write';
import Setting from './Pages/setting/Setting';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
// import Single from './components/Single/Single';
import SinglePost from  './components/SinglePost/SinglePost';
// import SideBar from './sideBar/SideBar';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
    <div className="app">   
    <TopBar/>       
      <Switch>
        <Route exact path="/">          
          <Home/>
        </Route>
        <Route path="/register">
          {user ? <Home/> :<Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home/> :<Login/>}
        </Route>
        <Route path="/write">           
        {user ? <Write/> :<Register/>}
        </Route>
        <Route path="/setting">       
        {user ? <Setting/> :<Register/>}
        </Route>
        <Route path="/post/:postId" >                   
          <SinglePost/>
         
          
        </Route>

      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
