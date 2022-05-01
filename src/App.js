import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to Fruit WMS</h1>
      {/* <Routes>
        <Route path='/'>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
