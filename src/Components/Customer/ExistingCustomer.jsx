import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal"; // Assuming Modal is in the same directory

function ExistingCustomer(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State for modal content

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (optional)

    try {
      const response = await axios.get("http://localhost:8082/customer/get"); 
      const existingUsers = response.data;
      const exists = existingUsers.some(user => user.username === username && user.password === password);

      if (exists) {
        navigate("/items"); // Navigate to the items page on successful login
        setModalMessage(`Welcome to Everest, ${username}`);
        setShowModal(true); // Show modal on successful login
      } else {
        setModalMessage("No account found. Please register.");
        setShowModal(true); // Show modal on failed login
        navigate("/customer");
      }
    } catch (err) {
      console.error(err); // Handle potential errors during API call
      setModalMessage("An error occurred. Please try again.");
      setShowModal(true); // Show modal on error
    }

     {/* Render the Modal component conditionally based on showModal state */}
     {showModal && <Modal message={modalMessage} onClose={() => setShowModal(true)} />}
  };

  return (
    <form onSubmit={handleSubmit}>

      <br/>
      <h2 className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", width: "150px", backgroundColor: "#365074" }}>Login</h2>
      <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color: "white", fontFamily: "Verdana, sans-serif", fontSize: "20px",  marginTop: "50px", marginLeft: "50px", backgroundColor: "#365074", width: "350px" }}>
        <br/><label htmlFor="username">Username</label>
        <br/><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                   id="username"
                   username="username"
                   type="text"
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   required
        />
        <br/><label htmlFor="password">Password</label>
        <br/><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px"}}
                   id="password"
                   password="password"
                   type="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
        />
        <div className="mt-2">
         
          <button type="submit" className="btn btn-light btn-lg"> Login </button>
        </div>
       
      </div>
    </form>

    
  );
}

export default ExistingCustomer;