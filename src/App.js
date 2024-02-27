import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logo2 from './Logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "rgba(135,150,180, 0.10)", }} >
        <Link to="/">
          <img src={Logo2} alt='Logo Icon' className="navbar-brand" width="180px" />
        </Link>
        <div><Link to='/signIn'><button type="button" className="btn btn-primary btn-lg" style={{ margin: "15px" }}>Sign In</button></Link></div>
       <div><Link to='/basket'><img src="/icons8-cart-48.png" alt="" height={40}></img></Link></div>
        <div><input style={{ margin: "15px", width: "700px"}} placeholder='Search here'></input></div>
        
      </nav>
      <Routes>
        <Route path='/' />
        <Route path='/basket' />
        <Route path='/signIn' />
      </Routes>
    </Router>

   
  );
}

export default App;
