import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logo2 from './Logo2.png'
 
function App() {
  return (
    
      <Router>
        <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "rgba(135,206,250, 0.50)", }} >
        <Link to="/">
            <img src={Logo2} alt='Logo Icon' className="navbar-brand" width="75px" />
          </Link>
          <Link to='/signIn'><button type="button" className="btn btn-dark" style={{ margin: "10px" }}>Sign In</button></Link>
          <Link to='/basket'><img src="/icons8-cart-48.png"></img></Link>
          <div>
          <input placeholder='Search here'></input>
          </div>
        </nav>
        <Routes>
          <Route path='/' />
          <Route path='/basket'/>
          <Route path='/signIn'/>
        </Routes>
      </Router>
 
    
  );
}
 
export default App;
 