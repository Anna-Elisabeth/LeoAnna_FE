import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function ExistingCustomer(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (optional)

    try {

      if (username === "admin" && password === "admin") {
        navigate("/admin");
        alert("Welcome Admin!");
        return;
      }
      const response = await axios.get("http://localhost:8082/customer/get"); // Replace with your API endpoint
      const existingUsers = response.data;
      const exists = existingUsers.some(user => user.username === username && user.password === password);

      if (exists) {
        navigate("/items"); // Navigate to the items page on successful login
        alert(`Welcome to Everest, ${username}`);
      } else {
        alert("No account found. Please register.");
        navigate("/customer");
      }
    } catch (err) {
      console.error(err); // Handle potential errors during API call
      alert("An error occurred. Please try again."); // Inform user about the error
    }
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
          {/* <button type="submit" className="btn btn-dark btn-lg"> Login </button> */}
          <button type="submit" className="btn btn-light btn-lg"> Login </button>
        </div>
      </div>
    </form>
  );
}

export default ExistingCustomer;