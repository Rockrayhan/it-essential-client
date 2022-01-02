import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore'
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='explore' element={<Explore/>} />
    <Route path='purchase/:id' element={<Purchase/>} />
   


   
    
      </Routes>
    </div>
  );
}

export default App;
