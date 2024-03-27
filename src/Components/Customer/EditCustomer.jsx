import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {

    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8082/customer/get/" + params.id)
            .then((res) => {
                console.log(res);
                setName(res.data.name);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setUsername(res.data.username);
                setPassword(res.data.password);
            }).catch((err) => console.error(err))
    }, [params.id]);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .patch("http://localhost:8082/customer/update/" + params.id, {
                name, address, email, phone, username, password
            })

            .then(() => {
                navigate("/admin");
            })
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <h1 aria-label="update customer page" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{marginLeft:"50px", marginTop:"50px", width: "550px", height: "100px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074"}} >Update Customer Details &nbsp;</h1>
            <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color:"white", fontSize: "20px", marginTop: "50px", marginLeft: "50px", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074", width: "350px" }}>
                <label htmlFor="name">Name</label>
                <br /><input aria-label="edit name field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <br /><label htmlFor="address">Address</label>
                <br /><input aria-label="edit address field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="address"
                    address="address"
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
                <br /><label htmlFor="email">Email</label>
                <br /><input aria-label="edit email field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="email"
                    email="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <br /><label htmlFor="phone">Phone</label>
                <br /><input aria-label="edit phone field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="phone"
                    phone="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <br /><label htmlFor="username">Username</label>
                <br /><input aria-label="edit username field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="username"
                    username="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <br /><label htmlFor="password">Password</label>
                <br /><input aria-label="edit password field" className="form-control border-3 border-dark rounded" style={{ width: "250px", height: "31px" }}
                    id="password"
                    password="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <div className="mt-2">
                    <button aria-label="update button" className="btn btn-light btn-lg" id="update" type="submit">Update</button>
                </div>
            </div>
        </form>


    );
}

export default EditCustomer