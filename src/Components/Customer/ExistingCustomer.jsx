import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
 
function LoginCustomer(props) {
 
    const [username, getUsername] = useState("")
    const [password, getPassword] = useState("")
    const navigate = useNavigate();
    const params = useParams(); 
 
    function GetCustomer() {
 
    axios.get("http://localhost:8082/customer/get/" + params.id)
        .then(response => {
            console.log(response);
            getUsername("");
          }).catch(err => console.error(err))
}
 
 
return (<form onSubmit={e => {
    e.preventDefault();
    GetCustomer();
}}>
 
    <h1 style={{ color: "white", fontFamily: "italic" }}>Login</h1>
 
    <br /><label htmlFor="username">Username</label>
    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
        id="username"
        username="username"
        type="text"
        value={username}
        onChange={e => getUsername(e.target.value)}
        required
    />
    <br /><label htmlFor="password">Password</label>
    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
        id="password"
        password="password"
        type="password"
        value={password}
        onChange={e => getPassword(e.target.value)}
        required
    />
    <div className="mt-2">
    <button onClick={() =>
              navigate("/customer/" + props.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Login{" "}
            </button>
    </div>
</form>
);
}
export default LoginCustomer;