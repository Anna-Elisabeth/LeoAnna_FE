import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logo2 from './Logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Components/Navbar';
import Items from './Components/Items/Items';
import ItemsPT from './Components/Items/ItemsPT';
import EditItems from './Components/Items/EditItems';
import Customers from './Components/Customer/Customer';
import EditCustomer from './Components/Customer/EditCustomer';

function App() {
  return (
    <Router>
      <Navbar className="navbar align-content-center " style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0)" }} />
      <Routes>
        <Route path='/' />
        <Route path='/items' element={<Items />} />
        <Route path='/existing' />
        <Route path='/customer' element={<Customers />} />
        <Route path='/items/edit/:id' element={<EditItems />} />
        <Route path='/customer/edit/:id' element={<EditCustomer />} />
      </Routes>
    </Router>


  );
}

export default App;