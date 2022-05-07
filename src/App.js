import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import TopNav from './components/NavBar/TopNav';
import Dashboard from './components/Dashboard/Dashboard';
import AddItems from './components/AddItems/AddItems';
import Allinventories from './components/Allinventories/Allinventories';
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
        <Route path='/additem' element={<AddItems></AddItems>}>
        </Route>
        <Route path='/manageinventory' element={<Allinventories></Allinventories>}>
        </Route>
        <Route path='/' element={<Home></Home>}>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
