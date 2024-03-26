import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function NewCustomer(props) {

    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function CheckCustomer() {

         axios.get("http://localhost:8082/customer/get").then(response => {
          console.log(response)
             for (const customer of response.data) {
                if (customer.username.toLowerCase() === username.toLowerCase()) {
                          alert("Customer already exists")
                          return;
                 }
             }
        
            axios.post("http://localhost:8082/customer/create",
                { name, address, email, phone, username, password })
                .then(response => {
                    console.log(response);
                    setName("");
                    setAddress("");
                    setEmail("");
                    setPhone("");
                    setUsername("");
                    setPassword("");
                    props.getCustomer();
                    alert("Registered! Redirecting to the login page")
                    navigate("/");
                    
                    
                }).catch(err => console.error(err))
         })
         
    
        }


    return (
        <main role="main">

        <form onSubmit={e => {
            e.preventDefault();
            CheckCustomer();
            
        }}>

            <br></br>
<h1 className="border border-dark p-2 mb-2 border-4  border-dark  rounded" style={{  color: "White", fontFamily: "Verdana, sans-serif", width: "400px", backgroundColor: "#365074"}}>New Customer Registration</h1>

            <div className="border  border-dark  p-2 mb-2 border-4  border-dark  rounded" style={{color: "white", fontFamily: "Verdana, sans-serif", fontSize: "20px", marginTop:"30px", marginLeft:"200px", backgroundColor: "#365074", width: "350px" }}>
                <label htmlFor="name">Name</label>
                <br /><input className="form-control border-3  border-dark  rounded" style={{ width: "250px", height: "31px" }}
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <br /><label htmlFor="address">Address</label>
                <br /><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="address"
                    address="address"
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
                <br /><label htmlFor="email">Email</label>
                <br /><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="email"
                    email="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <br /><label htmlFor="phone">Phone</label>
                <br /><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="phone"
                    phone="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <br /><label htmlFor="username">Username</label>
                <br /><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="username"
                    username="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <br /><label htmlFor="password">Password</label>
                <br /><input className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="password"
                    password="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <div className="mt-2">
                {/* <label htmlFor="al">Submit Button:</label> */}
                    <button 
             className="btn btn-dark"  type="submit" id="al" aria-label="Submit Button">Submit</button>
                </div>
           
           
            </div>





        </form>
        </main>
    );
}

export default NewCustomer;