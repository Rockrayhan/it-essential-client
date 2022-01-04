import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore'
import Purchase from './Components/Purchase/Purchase';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Payment from './Components/Dashboard/Payment/Payment';
import Myorders from './Components/Dashboard/MyOrders/Myorders';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='home' element={<Home/>} />
    <Route path='explore' element={<Explore/> }/>
    <Route path='purchase/:id' element={<PrivateRoute><Purchase/></PrivateRoute>} />

    <Route path='dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}> 

    </Route>

    <Route path='payment' element={<PrivateRoute><Payment/></PrivateRoute>} />
    <Route path='myorders' element={<PrivateRoute><Myorders/></PrivateRoute>} />

    <Route path='login' element={<Login/>} />
    <Route path='register' element={<Register/>} />
      </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
