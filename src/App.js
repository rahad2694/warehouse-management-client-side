import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import TopNav from './components/NavBar/TopNav';
import AddItems from './components/AddItems/AddItems';
import Allinventories from './components/Allinventories/Allinventories';
import UpdateInventory from './components/UpdateInventory/UpdateInventory';
import Login from './Login/Login';
import MyItems from './components/MyItems/MyItems';
import NoRoute404 from './components/NoRoute404/NoRoute404';
import RequireAuth from './Login/RequireAuth';
import Footer from './components/Footer/Footer';
const axios = require('axios');

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>

      <Routes>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }>
        </Route>

        <Route path='/login' element={<Login></Login>}>
        </Route>

        <Route path='/additem' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }>
        </Route>

        <Route path='/manageinventory' element={<Allinventories></Allinventories>}>
        </Route>

        <Route path='/updateinventory/:id' element={
          <RequireAuth>
            <UpdateInventory></UpdateInventory>
          </RequireAuth>
        }>
        </Route>

        <Route path='/' element={<Home></Home>}>
        </Route>

        <Route path='/blogs' element={<Blog></Blog>}>
        </Route>

        <Route path='*' element={<NoRoute404></NoRoute404>}>
        </Route>
      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
