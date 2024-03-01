import PropTypes from "prop-types";
import axios from "axios";

function DeleteCustomer(props) {

    function deleteCustomer (){
        axios.delete("http://localhost:8082/customer/delete/" + props.id)
        .then(response => {props.getCustomer()})
        .catch(err => console.error(err))
        }

    return (
        <div>Customer: {props.id}
        <div className="row">
            <p className="col"> {props.name} {props.address} {props.email} {props.phone} {props.username}</p>
            <p><button style={{width: "80px"}}className="btn btn-danger col" onClick={deleteCustomer}>Delete</button></p>
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