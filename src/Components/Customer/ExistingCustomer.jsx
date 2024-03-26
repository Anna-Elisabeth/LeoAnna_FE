import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
 
function ExistingCustomer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = async (e) => {
    e.preventDefault();
 

    if (username === "admin" && password === "admin") {
      setModalMessage("Logged in as Admin!");
      setShowModal(true);
      return;
    }
 
    try {
      const response = await axios.get("http://localhost:8082/customer/get");
      const existingUsers = response.data;
      const exists = existingUsers.some(
        (user) => user.username === username && user.password === password
      );
 
      if (exists) {
        setModalMessage(`Welcome to Dolphinity, ${username}`);
      } else {
        setModalMessage("No account found. Please register.");
      }
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setModalMessage("An error occurred. Please try again.");
      setShowModal(true);
    }
  };
 
  const handleModalClose = () => {
    setShowModal(false);
  };
 
  const handleNavigate = () => {
    if (modalMessage.includes("Welcome")) {
      navigate("/items");
    } 
    else if(modalMessage.includes("Logged in")){
      navigate("/admin");
    }
    
    else {
      navigate("/customer");
    }
  };
 
  return (
    <form onSubmit={handleLogin}>
      <h2 className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", width: "150px", backgroundColor: "#365074" }}>Login</h2>
      <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", fontSize: "20px",  marginTop: "50px", marginLeft: "50px", backgroundColor: "#365074", width: "350px" }}>
        <br/><label htmlFor="username">Username</label>
        <br/><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                   id="username"
                   name="username"
                   type="text"
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   required
        />
        <br/><label htmlFor="password">Password</label>
        <br/><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px"}}
                   id="password"
                   name="password"
                   type="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
        />
        <div className="mt-2">
          <button type="submit" className="btn btn-light btn-lg"> Login </button>
        </div>
      </div>
 
      {showModal && (
        <Modal
          open={showModal}
          onClose={handleModalClose}
          message={modalMessage}
          onNavigate={handleNavigate}
        />
      )}
    </form>
  );
}
 
export default ExistingCustomer;