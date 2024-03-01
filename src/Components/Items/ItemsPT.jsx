import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import productImages from "../../productsImage.json"


function ItemsPT(props) {
    const navigate = useNavigate();

    function deleteItem (){
        axios.delete("http://localhost:8082/item/delete/" + props.id)
        .then(response => {props.getItems()})
        .catch(err => console.error(err))
        }

        function getImageUrl(productName) {
           const productNameLower = productName.toLowerCase();
          if (productNameLower in productImages) {
              return productImages[productNameLower];
          } else {
              return "/default.png";
          }
      }


    return (  
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
        <div className="card-body ">
          <h4 className="card-title">
            {" "}
            <img
              src={getImageUrl(props.name)}
              alt="avatar"
              className="card-person"
              style={{ maxWidth: '100%', height: '100%' }}
            />
           <p>Item: {props.name}</p>
          </h4>
          <p>Price: {props.price}</p>
          <p>Quantity {props.quantity}</p>
          <button style={{marginTop: "10px"}} className="btn btn-success btn-md" onClick={deleteItem}>Add to Cart</button>
          <button onClick={() =>
              navigate("/items/edit/" + props.id)
            }style={{marginTop: "10px"}} type="submit" className="btn btn-warning">
              {" "}
              Edit Item{" "}
            </button>
          <button style={{marginTop: "10px"}} className="btn btn-danger" onClick={deleteItem}>Delete Item</button>
        </div>
    </Card>
  );
}
ItemsPT.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

    

export default ItemsPT;