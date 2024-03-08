import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logo2 from './Logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Components/Navbar';
import Items from './Components/Items/Items';
import ItemsPT from './Components/Items/ItemCard';
import EditItems from './Components/Items/EditItems';
import Customers from './Components/Customer/Customer';
import EditCustomer from './Components/Customer/EditCustomer';
import Basket from './Components/Basket/Basket';
import LoginCustomer from './Components/Customer/ExistingCustomer';
import Home from './Components/Home';


function App() {
  
  
  return (
    
    <Router>
      <Navbar className="navbar align-content-center " style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0)" }} />
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/items' element={<Items />} />
        <Route path='/customer/get/' element={<LoginCustomer/>} />
        <Route path='/customer' element={<Customers />} />
        <Route path='/items/edit/:id' element={<EditItems />} />
        <Route path='/customer/edit/:id' element={<EditCustomer />} />
        <Route path='/customer/existing/:id'/>
        <Route path='/customer/get/:id' element={<Basket/>}/>
      </Routes>
    </Router>




  );
}

export default App;