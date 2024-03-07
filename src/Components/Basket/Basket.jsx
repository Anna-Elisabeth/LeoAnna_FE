import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import productImages from "../../productsImage.json";
import { useNavigate } from "react-router-dom";

function Basket(props) {
    const params = useParams();
    const [basket, setBasket] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      getCustomer();
  }, []);

    function removeFromBasket(itemID) {
      console.log("Removing item with ID:", itemID)
      axios.patch("http://localhost:8082/item/removeItem/" + itemID)
      .then(() => {
        getCustomer()
    })
    .catch(err => console.error(err));
}


    function getCustomer() {
        axios.get("http://localhost:8082/customer/get/" + params.id)
            .then((response) => setBasket(response.data.items))
            .catch(console.log);
    }

    function quantityChange(index, newQuantity) {
        const updatedBasket = [...basket];
        updatedBasket[index].quantity = newQuantity;
        setBasket(updatedBasket);
    }

  
    const basketItems = basket.map((basketItem, index) => (

        <div className="d-inline-flex" style={{ maxWidth: "20%", margin: "20px" }} key={index}>
            <div className="card">
                <div className="card-body">
                    <img
                        src={getImageUrl(basketItem.name)}
                        alt="avatar"
                        className="card-person"
                        style={{ maxWidth: '100px', height: '100px' }}
                    />
                    <h5>{basketItem.name}</h5>
                    <h8>Price: £ {basketItem.price}</h8>
                    <Counter
                        value={basketItem.quantity}
                        onChange={(newQuantity) => quantityChange(index, newQuantity)}
                    />
                    <h6>Total: £ {basketItem.price * (basketItem.quantity || 0)}</h6>
                    
                </div>
            </div>
        </div>
    ));

    const basketTotal = basket.reduce((total, item) => {
        return total + (Number(item.price) * Number(item.quantity));
      }, 0);

    function getImageUrl(productName) {
        const productNameLower = productName.toLowerCase();
        return productImages[productNameLower] || "/default.png";
    }

    return (
        <div><br></br>
             <h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ color: "white", fontFamily: "italic", width: "150px", backgroundColor: "#ffffff6b"}}>Basket: </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map((basketItem, index) => (
            <tr key={index}>
              <td>
                <img
                  src={getImageUrl(basketItem.name)}
                  alt="avatar"
                  className="card-person"
                  style={{ maxWidth: '100px', height: '100px' }}
                />
              </td>
              <td>{basketItem.name}</td>
              <td>£ {basketItem.price}</td>
              <td>
                <Counter
                  value={basketItem.quantity}
                  onChange={(newQuantity) => quantityChange(index, newQuantity)}
                />
              </td>
              <td class="text-decoration-underline"  style={{color: "blue"}}>£ {basketItem.price * (basketItem.quantity || 0)}</td>
              <td><button className="btn btn-primary" onClick={() => removeFromBasket(basketItem.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table><br></br>
            <div><h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ color: "Blue", fontFamily: "italic", width: "350px", backgroundColor: "#ffffff6b"}}>Basket Total : £{basketTotal}</h2></div>
            <button className="btn btn-primary" type="submit">Checkout</button>
        </div>
    );
}

export default Basket;
