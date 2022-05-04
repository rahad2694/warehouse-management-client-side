import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to Fruit WMS</h1>
      {/* <Routes>
        <Route path='/'>
        </Route>
      </Routes> */}
      <Toaster />
    </div>
  );
}

export default App;
