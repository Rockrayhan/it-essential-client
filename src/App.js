import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore'
import Purchase from './Components/Purchase/Purchase';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='home' element={<Home/>} />
    <Route path='explore' element={<Explore/>} />
    <Route path='purchase/:id' element={<Purchase/>} />
    <Route path='login' element={<Login/>} />
    <Route path='register' element={<Register/>} />
   


   
    
      </Routes>
    </div>
  );
}

export default App;
