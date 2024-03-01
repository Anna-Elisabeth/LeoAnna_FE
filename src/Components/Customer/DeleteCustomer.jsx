import PropTypes from "prop-types";
import axios from "axios";
import EditCustomer from './EditCustomer'
import { useNavigate } from "react-router-dom";

function DeleteCustomer(props) {

    const navigate = useNavigate();
    function deleteCustomer (){
        axios.delete("http://localhost:8082/customer/delete/" + props.id)
        .then(response => {props.getCustomer()})
        .catch(err => console.error(err))
        }

    return (
        
        <div>Customer: {props.username}
            <div className="row">
                <button onClick={() =>
              navigate("/customer/edit/" + props.id) }style={{ width: "100px", margin: "10px" }} className="btn btn-warning" >Edit</button>
                <button style={{ width: "100px", margin: "10px" }} className="btn btn-danger" onClick={deleteCustomer}>Delete</button>
            </div>
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