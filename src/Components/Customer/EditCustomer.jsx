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
                navigate("/customer");
            })
            .catch((error) => console.error(error));
    };


    return (
        <form onSubmit={handleSubmit}>

            <h1 style={{ color: "white", fontFamily: "italic" }}>New Customer Registration</h1>

            <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop: "50px", marginLeft: "50px", backgroundColor: "#ffffff6b", width: "350px" }}>
                <label htmlFor="name">Name</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <br /><label htmlFor="address">Address</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="address"
                    address="address"
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
                <br /><label htmlFor="email">Email</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="email"
                    email="email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <br /><label htmlFor="phone">Phone</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="phone"
                    phone="phone"
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <br /><label htmlFor="username">Username</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="username"
                    username="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <br /><label htmlFor="password">Password</label>
                <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                    id="password"
                    password="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <div className="mt-2">
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
            </div>
        </form>


    );
}

export default EditCustomer