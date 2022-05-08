import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import TopNav from './components/NavBar/TopNav';
import Dashboard from './components/Dashboard/Dashboard';
import AddItems from './components/AddItems/AddItems';
import Allinventories from './components/Allinventories/Allinventories';
import UpdateInventory from './components/UpdateInventory/UpdateInventory';
import LoginUser from './components/LoginUser/LoginUser';
import Login from './Login/Login';
import MyItems from './components/MyItems/MyItems';
import NoRoute404 from './components/NoRoute404/NoRoute404';
const axios = require('axios');

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
    
      <Routes>
        <Route path='/blog' element={<Blog></Blog>}>
        </Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        </Route>
        <Route path='/myitems' element={<MyItems></MyItems>}>
        </Route>
        <Route path='/loginuser' element={<LoginUser></LoginUser>}>
        </Route>
        <Route path='/login' element={<Login></Login>}>
        </Route>
        <Route path='/additem' element={<AddItems></AddItems>}>
        </Route>
        <Route path='/manageinventory' element={<Allinventories></Allinventories>}>
        </Route>
        <Route path='/updateinventory/:id' element={<UpdateInventory></UpdateInventory>}>
        </Route>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/blogs' element={<Blog></Blog>}>
        </Route>
        <Route path='*' element={<NoRoute404></NoRoute404>}>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
