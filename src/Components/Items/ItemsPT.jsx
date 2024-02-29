import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ItemsPT() {
    const navigate = useNavigate();

    function deleteItem (){
        axios.delete("http://localhost:8082/item/delete/" + props.id)
        .then(response => {props.getItem()})
        .catch(err => console.error(err))
        }


    return (  
        <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title">
            {" "}
            <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              alt="avatar"
              className="card-person"
            />
            {props.name}
          </h4>
          <p>{props.price}</p>
          <p>{props.quantity}</p>
          <button onClick={() =>
              navigate("/item/edit/" + props.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-success btn-md">
              {" "}
              Edit Item{" "}
            </button>
          <button style={{marginTop: "10px"}} className="btn btn-danger" onClick={deleteItem}>Delete Item</button>
        </div>
      </div>
    </Card>
  );
}
BuyersPT.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

    

export default ItemsPT;