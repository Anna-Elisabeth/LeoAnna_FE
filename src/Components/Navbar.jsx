import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemCard from './Items/ItemCard';


function Navbar() {

  const [basket, setBasket] = useState([])

  return (
    <>
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <Link to="/">
                  <img src="/Logo2.png" alt="Logo Icon" className="navbar-brand" width="180px" />
                </Link>
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div className="input-group">
                    <input type="search" placeholder="Search your product" className="form-control" />
                    <button className="btn bg-white" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link to="/customer/get/1">
                      <button style={{ paddingLeft:"30px", color: "white" }} className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart" viewBox="0 0 19 19">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                          <circle cx="15" cy="3.5" r="3.5" fill="red"></circle>
                          <text x="15" y="6" textAnchor="middle" fill="white" fontSize="7">{basket.length}</text>
                        </svg> 
                      </button></Link>
                  </li>
                  <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign In
                    </a>
                    <ul class="dropdown-menu">
                      <li><Link to="/customer/get/" class="dropdown-item" >Existing Customer</Link></li>
                      <li><Link to="/customer" class="dropdown-item">New Customer</Link></li>
                      <li><Link to="/items" class="dropdown-item">Items</Link></li>
                      <li><Link to="admin" class="dropdown-item">Admin</Link></li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
