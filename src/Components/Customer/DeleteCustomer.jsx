import PropTypes from "prop-types";
import axios from "axios";
import EditCustomer from './EditCustomer'
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";


function DeleteCustomer(props) {

    const navigate = useNavigate();
    function deleteCustomer (){
        axios.delete("http://localhost:8082/customer/delete/" + props.id)
        .then(response => {props.getCustomer()})
        .catch(err => console.error(err))
        }

    return (
        
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <Card style={{  width: "250px" }}>
                <div className="card-body" >
                    <img style={{ width: '50%' }} src="/Customer.PNG" alt="" />
                    <h4>{props.username}</h4>
                    <div className="row">
                        <button onClick={() => navigate("/customer/edit/" + props.id)} style={{ width: "100px", margin: "10px" }} className="btn btn-warning">Edit</button>
                        <button style={{ width: "100px", margin: "10px" }} className="btn btn-danger" onClick={deleteCustomer}>Delete</button>
                        <button onClick={() => navigate("/customer/get/" + props.id)} style={{ width: "100px", margin: "10px" }} className="btn btn-danger" >Login</button>
                    </div>
                </div>
            </Card>
        </div>
    

    )
}
DeleteCustomer.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

export default DeleteCustomer;