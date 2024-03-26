
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


function LoginCust(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div>


            <br />

            <form className="form" onSubmit={e => {
                e.preventDefault();

                axios.get("http://localhost:8082/customer/get/")
                    .then(response => {
                        const existingCustomer = response.data;
                        const exists = existingCustomer.some(customer => { return customer.username === username && customer.password === password; });
                        if (exists) {

                            navigate("/items");
                            alert(`Welcome, ${username}, click here to start shopping`);
                        } else {
                            console.log("Death to Intruders");
                            alert("In the end you are all expendable")
                        }
                    }).catch(err => console.error(err));

            }}>


                {/* this is the input form, to create a user */}

                {/* <p className="welcome">test</p> */}

                <label htmlFor="user"><strong>Username</strong> &nbsp;</label>
                <br />
                <input
                    value={username}
                    br
                    onChange={(e) => setUsername(e.target.value)}
                    id="fn"
                    type="text"
                    class="form-control, col-3"

                ></input>

                <br />
                <label htmlFor="pass"> <strong>Password</strong> &nbsp;</label>
                <br />
                <input
                    value={password}
                    br
                    onChange={(e) => setPassword(e.target.value)}
                    id="ln"
                    type="password"
                    class="form-control, col-3"
                ></input>
                <br />
                <br />
                <button type="submit" className="btn btn-success btn-md">
                    You call yourself a prime...user?: Submit your information for immediate verification
                </button>

                <br />
            </form>

            <br />



            <h3>Don't have an account?</h3>


            <Link to="/customer" className="btn btn-warning col-12 ">ENTER IF YOU DARE!!!</Link>


            <br />
            <br />

            <h4>The survival tip: Everything you buy here is food for your pathetic retail hunger!</h4>


            <br />



        </div>
    )
}
export default LoginCust;