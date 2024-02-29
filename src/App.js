import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logo2 from './Logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Components/Navbar';

import Customers from './Components/NewCustomer/Customer';

function App() {
  return (
    <Router>
      <Navbar className="navbar align-content-center " style={{ display: "flex", backgroundColor: "rgba(0, 0, 0, 0)" }} />
      <Routes>
        <Route path='/' />
          <Route path='/admin' />
          <Route path='/existing' />  
          <Route path='/newCust' element={<Customers/>}/>
          <Route path='/basket' />
        </Routes>
      </Router>

   
  );
}

export default App;