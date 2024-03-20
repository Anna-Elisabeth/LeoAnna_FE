import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import productImages from "../../productsImage.json";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

function Basket(props) {
    const params = useParams();
    const [basket, setBasket] = useState([]);
    const navigate = useNavigate();
    const handleConfetti = () => {
      confetti({
        particleCount: 500,
        spread: 320,
      });
    };

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

    // <div className="col-1 text-right">£{taxPrice.toFixed(2)}</div>
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
                    <h8>Price: £ {basketItem.price.toFixed(2)}</h8>
                    <Counter
                        value={basketItem.quantity}
                        onChange={(newQuantity) => quantityChange(index, newQuantity)}
                    />
                    <h6>Total: £ {basketItem.price.toFixed(2) * (basketItem.quantity || 0).toFixed(2)}</h6>
                    
                </div>
            </div>
        </div>
    ));

    const basketTotal = basket.reduce((total, item) => {
        return total + (Number(item.price) * Number(item.quantity));
      }, 0).toFixed(2);

    function getImageUrl(productName) {
        const productNameLower = productName.toLowerCase();
        return productImages[productNameLower] || "/default.png";
    }

    return (
        <div>
          
          <header>
             <h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ color: "white", fontFamily: "italic", width: "150px", backgroundColor: "#ffffff6b"}}>Basket: </h2>
             </header>
             <main>
      
      <table className="table" aria-label="table">
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
              <td className="text-decoration-underline"  style={{color: "blue"}}>£ {(basketItem.price * (basketItem.quantity || 0)).toFixed(2)}</td>
              <td><button className="btn btn-primary" aria-label="Remove" onClick={() => removeFromBasket(basketItem.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table><br></br>
            <div><h2 className="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ color: "Blue", fontFamily: "italic", width: "350px", backgroundColor: "#ffffff6b"}}>Basket Total : £{basketTotal}</h2></div>
            <button onClick={handleConfetti} className="btn btn-primary" type="submit" aria-label="Checkout">Checkout</button>
            </main>
        </div>
    );
}

export default Basket;
